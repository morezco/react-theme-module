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
import React from "react";
import { Container } from "./styles";
import { clicks } from "../../constants";
import Header from "./Header/Header";
import Variables from "./Variables/Variables";
import List from "./List/List";
export default function Context(_a) {
    var output = _a.output, selected = _a.selected, children = _a.children, variables = _a.variables;
    return (React.createElement(Container, { selected: selected },
        React.createElement("div", __assign({}, clicks),
            React.createElement(Header, null, children),
            React.createElement(Variables, __assign({}, variables)),
            React.createElement(List, { context: children, data: output }))));
}
//# sourceMappingURL=Context.js.map