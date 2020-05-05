import React from "react";
import { Container, List } from "./styles";
import Header from "./Header/Header";
import { Select } from "../../../components";
export default function Variables(_a) {
    var current = _a.current, dictionary = _a.dictionary;
    return Object.entries(dictionary).length ? (React.createElement(Container, null,
        React.createElement(Header, null),
        React.createElement(List, null, Object.entries(dictionary).map(function (_a) {
            var name = _a[0], value = _a[1];
            return (React.createElement("div", { key: name },
                React.createElement("p", null, name),
                React.createElement(Select, { options: Object.keys(value), state: current[name], set: function () { } })));
        })),
        React.createElement("hr", null))) : null;
}
//# sourceMappingURL=Variables.js.map