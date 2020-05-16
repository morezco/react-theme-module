import React from "react";
import { Container } from "./styles";
import Property from "./Property/Property";
export default function List(_a) {
    var data = _a.data, context = _a.context;
    return (React.createElement(Container, null, Object.entries(data).map(function (_a) {
        var name = _a[0], value = _a[1];
        return (React.createElement(Property, { key: name, context: context, name: name }, value));
    })));
}
//# sourceMappingURL=List.js.map