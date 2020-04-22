import React, { useContext, useMemo } from "react";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import Context from "./Context/Context";
export default function Contexts(_a) {
    var history = _a.history;
    var Theme = useContext(ThemeContext);
    var contexts = useMemo(function () {
        var Contexts = Object.entries(Theme).filter(function (_a) {
            var key = _a[0];
            return key.toLowerCase() === key;
        });
        return Contexts.map(function (_a, index) {
            var name = _a[0], variables = _a[1];
            return (React.createElement(Context, { key: index, name: name, data: variables }));
        });
    }, [Theme]);
    return React.createElement(Container, { large: history }, contexts);
}
//# sourceMappingURL=Contexts.js.map