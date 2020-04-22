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
import React, { useState, useEffect, createContext, useContext, useCallback, useMemo, } from "react";
import { Load, Save } from "../helpers";
import { ThemeContext } from "styled-components";
import { Container, Code } from "./styles";
import Header from "./Header/Header";
import Contexts from "./Contexts/Contexts";
var LS = "theme_devtools_state";
export var Config = createContext(Load(LS, {
    addingTheme: false,
    history: true,
    contexts: {},
    code: "",
}));
export function DevTools() {
    var _a = useContext(ThemeContext), DevTools = _a.DevTools, Themes = _a.Themes;
    var _b = useState(Load(LS, {
        addingTheme: false,
        history: true,
        contexts: {},
        code: "",
    })), ConfigState = _b[0], SetConfigState = _b[1];
    var set = useCallback(function (state, value) { return function () {
        var _a;
        return SetConfigState(__assign(__assign({}, ConfigState), (_a = {}, _a[state] = value, _a)));
    }; }, [ConfigState]);
    var toggle = useCallback(function (state) { return function () {
        var _a;
        return SetConfigState(__assign(__assign({}, ConfigState), (_a = {}, _a[state] = !ConfigState[state], _a)));
    }; }, [ConfigState]);
    var toggleContextValue = useCallback(function (name, property, value) { return function () {
        var _a, _b;
        return SetConfigState(__assign(__assign({}, ConfigState), { contexts: __assign(__assign({}, ConfigState.contexts), (_a = {}, _a[name] = __assign(__assign({}, ConfigState.contexts[name]), (_b = {}, _b[property] = typeof value !== "undefined"
                ? value
                : !ConfigState.contexts[name][property], _b)), _a)) }));
    }; }, [ConfigState]);
    var toggleFilter = useCallback(function (name) { return function () {
        var _a;
        return SetConfigState(__assign(__assign({}, ConfigState), { filter: __assign(__assign({}, ConfigState.filter), (_a = {}, _a[name] = !ConfigState.filter[name], _a)) }));
    }; }, [ConfigState]);
    useEffect(useCallback(function () {
        var newState = {};
        Object.entries(Themes).forEach(function (_a) {
            var context = _a[0], variables = _a[1];
            if (ConfigState.contexts[context]) {
                newState[context] = __assign({}, ConfigState.contexts[context]);
            }
            else {
                newState[context] = {
                    open: !Object.entries(variables || {}).length,
                    addingProperty: !Object.entries(variables || {}).length,
                };
            }
        });
        SetConfigState(__assign(__assign({}, ConfigState), { contexts: newState }));
        // eslint-disable-next-line
    }, [Themes, ConfigState]), [Themes]);
    useMemo(function () {
        if (ConfigState) {
            Save(LS, ConfigState);
        }
    }, [ConfigState]);
    return (React.createElement(Config.Provider, { value: __assign(__assign({}, ConfigState), { set: set, toggle: toggle, toggleContextValue: toggleContextValue, toggleFilter: toggleFilter }) },
        React.createElement(Container, { open: DevTools },
            React.createElement(Header, null),
            DevTools && (React.createElement(React.Fragment, null,
                React.createElement(Contexts, { history: ConfigState.history })))),
        ConfigState.code && (React.createElement(Code, { onDoubleClick: set("code", "") },
            React.createElement("p", null, ConfigState.code)))));
}
//# sourceMappingURL=DevTools.js.map