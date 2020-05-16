import React from "react";
import { Container } from "./styles";
import { U } from "../../helpers";
export default function Header(_a) {
    var name = _a.name, change = _a.change, event = _a.event;
    return (React.createElement(Container, { onDoubleClick: event },
        React.createElement("h1", { onClick: change }, U(name))));
}
//# sourceMappingURL=Header.js.map