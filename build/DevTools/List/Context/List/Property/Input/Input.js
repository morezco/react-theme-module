import React, { useContext } from "react";
import { Context } from "../../../../../../constants";
import { Container, Element } from "./styles";
export default function Input(_a) {
    var property = _a.property, context = _a.context, value = _a.value;
    var controller = useContext(Context);
    var handler = function (e) {
        var value = e.target.value;
        controller.context.set(context)(property, value);
        controller.reload.set(true);
    };
    return (React.createElement(Container, null,
        React.createElement(Element, { value: value, onChange: handler })));
}
//# sourceMappingURL=Input.js.map