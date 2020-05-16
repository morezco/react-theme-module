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
import React, { useEffect, useContext } from "react";
import { Context } from "../constants";
import { clicks } from "./constants";
import { Container, Code } from "./styles";
import Header from "./Header/Header";
import List from "./List/List";
export function DevTools() {
    var _a = useContext(Context), _sdtrs = _a._sdtrs, theme = _a.theme, devtools = _a.devtools, contexts = _a.contexts;
    useEffect(function () {
        _sdtrs(true);
        return function () { return _sdtrs(false); };
    }, [_sdtrs]);
    return (React.createElement(React.Fragment, null,
        devtools.code.input && (React.createElement(Code, { onDoubleClick: function () { return devtools.code.set(""); } },
            React.createElement("h2", null, "Input"),
            devtools.code.input,
            React.createElement("h2", null, "Output"),
            devtools.code.output,
            React.createElement("h2", null, "Override"),
            devtools.code.override)),
        React.createElement(Container, __assign({}, devtools),
            React.createElement("div", __assign({}, clicks),
                React.createElement(Header, __assign({ event: devtools.toggle }, theme)),
                React.createElement(List, __assign({}, contexts))))));
}
//# sourceMappingURL=DevTools.js.map