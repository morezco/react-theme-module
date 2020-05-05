import React from "react";
import { Container } from "./styles";
export default function Option(_a) {
    var children = _a.children, value = _a.value, set = _a.set;
    return React.createElement(Container, { onClick: function () { return set(value); } }, children);
}
//# sourceMappingURL=Option.js.map