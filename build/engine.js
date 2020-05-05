var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useCallback, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Context, } from "./constants";
import { Load, Save, clone } from "./helpers";
var LS_DevTools = "theme_devtools";
var LS_Context = "theme_open_context";
export var Themed = function (_a) {
    var _b = _a.initial, initial = _b === void 0 ? "Theme" : _b, _c = _a.themes, themes = _c === void 0 ? ["Theme"] : _c, _d = _a.forgetful, forgetful = _d === void 0 ? false : _d, OSPreference = _a.OSPreference, times = _a.times, children = _a.children;
    var _e = useState((!forgetful && Load("theme")) || initial), _theme = _e[0], _setTheme = _e[1];
    var _themes = useState(themes)[0];
    var _f = useState(false), _reload = _f[0], _setReload = _f[1];
    var _g = useState(false), _renderedDevtools = _g[0], _setRenderedDevtools = _g[1];
    var _h = useState(!!(Load(LS_DevTools) || false)), _devtools = _h[0], _setDevtools = _h[1];
    var _j = useState({}), _contexts = _j[0], _setContexts = _j[1];
    var _k = useState({
        input: "",
        output: "",
        override: "",
    }), _code = _k[0], _setCode = _k[1];
    var set = useCallback(function (name, isRestoring) {
        if (isRestoring === void 0) { isRestoring = false; }
        name = name.toLowerCase();
        if (themes === null || themes === void 0 ? void 0 : themes.includes(name)) {
            _setTheme(name);
            if (!forgetful) {
                Save("theme", name);
            }
        }
        else {
            throw new Error("Attempted to " + (isRestoring ? "restore" : "set") + " non-existent theme \"" + name + "\". Be sure to pass all of your possible palette names into the themes prop.");
        }
    }, [_setTheme, forgetful, themes]);
    useMemo(function () {
        if (OSPreference) {
            set(OSPreference, true);
        }
        else if (times) {
            var now_1 = new Date().getHours();
            var eligible = Object.keys(times).filter(function (key) { return Number(key) >= now_1; });
            if (!eligible.length) {
                eligible.push(Object.keys(times)[0]);
            }
            eligible = eligible.map(function (x) { return Number(x); });
            var selection = times[Math.min.apply(Math, eligible)];
            set(selection, true);
        }
        else {
            if (!(_themes === null || _themes === void 0 ? void 0 : _themes.includes(_theme))) {
                _setTheme(_themes[0]);
            }
        }
    }, [_themes, _theme, set, OSPreference, times]);
    var change = useCallback(function () {
        var current = (themes === null || themes === void 0 ? void 0 : themes.indexOf(_theme)) || 0;
        var name = current === (_themes === null || _themes === void 0 ? void 0 : _themes.length) - 1 ? _themes[0] : _themes[current + 1];
        _setTheme(name);
        Save("theme", name);
    }, [_theme, _themes, themes]);
    var toggleDevTools = useCallback(function (force) {
        if (_renderedDevtools) {
            _setDevtools(force || !_devtools);
            Save(LS_DevTools, String(force || !_devtools));
        }
    }, [_devtools, _setDevtools, _renderedDevtools]);
    var _sdtrs = useCallback(function (s) { return _setRenderedDevtools(s); }, [
        _setRenderedDevtools,
    ]);
    var add = useCallback(function (name, config, variables) {
        var _a, _b;
        var original = clone(config);
        var res = {};
        var vars = {
            dictionary: {},
            current: {},
        };
        for (var property in config[_theme]) {
            if (typeof config[_theme][property] !== "string" &&
                variables &&
                variables[property]) {
                for (var word in config[_theme][property][variables[property]]) {
                    for (var key in config[_theme]) {
                        if (typeof config[_theme][key] === "string") {
                            config[_theme][key] = config[_theme][key].replace(word, config[_theme][property][variables[property]][word]);
                        }
                    }
                }
            }
        }
        for (var property in config[_theme]) {
            if (typeof config[_theme][property] === "string") {
                res[property] =
                    ((_b = (_a = _contexts[name]) === null || _a === void 0 ? void 0 : _a.override[_theme]) === null || _b === void 0 ? void 0 : _b[property]) ||
                        config[_theme][property];
            }
            else {
                vars.dictionary[property] = config[_theme][property];
                vars.current = variables;
            }
        }
        _setContexts(function (current) {
            var _a;
            var _b, _c;
            return (__assign(__assign({}, current), (_a = {}, _a[name] = {
                input: original,
                output: res,
                variables: vars,
                selected: ((_b = current[name]) === null || _b === void 0 ? void 0 : _b.selected) || Load(LS_Context) === name || false,
                override: __assign({}, (_c = current[name]) === null || _c === void 0 ? void 0 : _c.override) || {},
            }, _a)));
        });
    }, [_theme, _contexts, _setContexts]);
    var setProperty = useCallback(function (context) { return function (property, value) {
        _setContexts(function (current) {
            var _a, _b, _c, _d, _e, _f;
            return (__assign(__assign({}, current), (_a = {}, _a[context] = __assign(__assign({}, current[context]), { output: __assign(__assign({}, current[context].output), (_b = {}, _b[property] = current[context].output[property] ||
                    current[context].override[property], _b)), override: current[context].override
                    ? __assign(__assign({}, current[context].override), (_c = {}, _c[_theme] = __assign(__assign({}, current[context].override[_theme]), (_d = {}, _d[property] = value, _d)), _c)) : (_e = {},
                    _e[_theme] = (_f = {},
                        _f[property] = value,
                        _f),
                    _e) }), _a)));
        });
    }; }, [_setContexts, _theme]);
    var select = useCallback(function (context, only) {
        if (only === void 0) { only = false; }
        if (_contexts[context]) {
            _setContexts(function (current) {
                var _a;
                Save(LS_Context, !current[context].selected ? context : "");
                if (!only) {
                    return __assign(__assign({}, current), (_a = {}, _a[context] = __assign(__assign({}, current[context]), { selected: !current[context].selected }), _a));
                }
                else {
                    var res = {};
                    for (var key in current) {
                        res[key] = clone(current[key]);
                        res[key].selected = key === context && !current[context].selected;
                    }
                    return res;
                }
            });
        }
    }, [_setContexts, _contexts]);
    var unset = useCallback(function (context) { return function (property) {
        var _a, _b;
        if ((_a = _contexts[context]) === null || _a === void 0 ? void 0 : _a.override[property]) {
            var next = clone(_contexts);
            (_b = next[context]) === null || _b === void 0 ? true : delete _b.override[property];
            _setContexts(next);
        }
    }; }, [_setContexts, _contexts]);
    var output = useMemo(function () {
        var _a, _b, _c;
        var res = {};
        Object.entries(_contexts).forEach(function (_a) {
            var name = _a[0], output = _a[1].output;
            res[name] = clone(output);
        });
        for (var key in _contexts) {
            if ((_a = _contexts[key].override) === null || _a === void 0 ? void 0 : _a[_theme]) {
                for (var property in (_b = _contexts[key].override) === null || _b === void 0 ? void 0 : _b[_theme]) {
                    res[key][property] = (_c = _contexts[key].override) === null || _c === void 0 ? void 0 : _c[_theme][property];
                }
            }
        }
        return res;
    }, [_contexts, _theme]);
    return (React.createElement(Context.Provider, { value: {
            _sdtrs: _sdtrs,
            theme: {
                name: _theme,
                names: _themes,
                set: set,
                change: change,
            },
            devtools: {
                open: _devtools,
                rendered: _renderedDevtools,
                toggle: toggleDevTools,
                code: __assign(__assign({}, _code), { set: _setCode }),
            },
            context: {
                add: add,
                set: setProperty,
                unset: unset,
                select: select,
            },
            reload: {
                reload: _reload,
                set: _setReload,
            },
            contexts: _contexts,
        } },
        React.createElement(ThemeProvider, { theme: output }, children)));
};
//# sourceMappingURL=engine.js.map