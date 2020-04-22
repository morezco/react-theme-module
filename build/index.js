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
import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { Load, Save } from "./helpers";
import { themes } from "./json";
import "./styles/fonts.css";
import "./styles/animations";
export { useTheme } from "./useTheme";
export { DevTools } from "./DevTools/DevTools";
var LS_DevTools = "theme_devtools";
export var Themed = function (_a) {
    var children = _a.children;
    var _b = useState({}), Themes = _b[0], setThemes = _b[1];
    var _c = useState(Load(LS_DevTools)), DevTools = _c[0], SetDevTools = _c[1];
    var _d = useState(Load("theme") || themes[0]), Theme = _d[0], setTheme = _d[1];
    var Use = useCallback(function (agent) {
        if (agent === void 0) { agent = ""; }
        return function (name) {
            name = name.toLowerCase();
            if (themes.includes(name)) {
                setTheme(name);
                localStorage.setItem("theme", name);
                return true;
            }
            return false;
        };
    }, []);
    var Switch = useCallback(function (agent) {
        if (agent === void 0) { agent = ""; }
        return function () {
            var current = themes.indexOf(Theme);
            var name = current === themes.length - 1 ? themes[0] : themes[current + 1];
            setTheme(name);
            localStorage.setItem("theme", name);
            return true;
        };
    }, [Theme]);
    var Add = useCallback(function (agent) {
        if (agent === void 0) { agent = ""; }
        return function (name, config) {
            if (config === void 0) { config = {}; }
            name = name.toLowerCase();
            setThemes(function (currentThemes) {
                var _a;
                return (__assign(__assign({}, currentThemes), (_a = {}, _a[name] = config[Theme], _a)));
            });
            if (!config[Theme]) {
            }
            return true;
        };
    }, [Theme]);
    var Remove = useCallback(function (agent) {
        if (agent === void 0) { agent = ""; }
        return function (name) {
            name = name.toLowerCase();
            var newState = __assign({}, Themes);
            delete newState[name];
            setThemes(newState);
            return true;
        };
    }, [Themes]);
    var Set = useCallback(function (agent) {
        if (agent === void 0) { agent = ""; }
        return function (theme, property, value) {
            var _a, _b;
            theme = theme.toLowerCase();
            setThemes(__assign(__assign({}, Themes), (_a = {}, _a[theme] = __assign(__assign({}, Themes[theme]), (_b = {}, _b[property] = value, _b)), _a)));
            return true;
        };
    }, [Themes]);
    var Unset = useCallback(function (agent) {
        if (agent === void 0) { agent = ""; }
        return function (theme, property) {
            theme = theme.toLowerCase();
            if (Themes[theme]) {
                if (Themes[theme][property]) {
                    var newState = __assign({}, Themes);
                    delete newState[theme][property];
                    setThemes(newState);
                    return true;
                }
            }
            return false;
        };
    }, [Themes]);
    var ToggleDevTools = useCallback(function () {
        SetDevTools(!DevTools);
        Save(LS_DevTools, !DevTools);
    }, [DevTools]);
    var For = useCallback(function (agent) { return ({
        Name: Theme,
        Use: Use(agent),
        Switch: Switch(agent),
        Add: Add(agent),
        Remove: Remove(agent),
        Set: Set(agent),
        Unset: Unset(agent),
    }); }, [Theme, Use, Switch, Add, Remove, Set, Unset]);
    useEffect(useCallback(function () {
        if (Theme === "dark") {
            document.body.style.backgroundColor = "black";
        }
        else {
            document.body.style.backgroundColor = "white";
        }
    }, [Theme]), [Theme]);
    return (React.createElement(ThemeProvider, { theme: __assign({ Name: Theme, Themes: Themes,
            Use: Use,
            Switch: Switch,
            Add: Add,
            Remove: Remove,
            Set: Set,
            Unset: Unset,
            DevTools: DevTools,
            ToggleDevTools: ToggleDevTools,
            For: For }, Themes) }, children));
};
//# sourceMappingURL=index.js.map