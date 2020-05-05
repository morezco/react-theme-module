import React from "react";
import { Container } from "./styles";
import Name from "./Name/Name";
import Input from "./Input/Input";
export default function Property(_a) {
    var context = _a.context, children = _a.children, name = _a.name;
    return (React.createElement(Container, null,
        React.createElement(Name, null, name),
        React.createElement(Input, { property: name, context: context, value: children })));
}
//# sourceMappingURL=Property.js.map