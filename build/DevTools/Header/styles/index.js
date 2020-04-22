var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Header = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  hr {\n    border: 0;\n    height: 1px;\n    background-image: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 255),\n      rgba(255, 255, 255, 0.75),\n      rgba(0, 0, 0, 0)\n    );\n  }\n"], ["\n  hr {\n    border: 0;\n    height: 1px;\n    background-image: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 255),\n      rgba(255, 255, 255, 0.75),\n      rgba(0, 0, 0, 0)\n    );\n  }\n"])));
export var Options = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"])));
export var Icons = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  * {\n    cursor: pointer;\n  }\n"], ["\n  * {\n    cursor: pointer;\n  }\n"])));
export var Names = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  p {\n    margin: 0px 10px;\n    cursor: pointer;\n\n    &.Damp {\n      opacity: 0.5;\n    }\n  }\n"], ["\n  display: flex;\n  p {\n    margin: 0px 10px;\n    cursor: pointer;\n\n    &.Damp {\n      opacity: 0.5;\n    }\n  }\n"])));
export var Title = styled.h1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n\n  ", "\n"], ["\n  cursor: pointer;\n\n  ", "\n"])), function (_a) {
    var open = _a.open;
    return !open && "font-size: 2em;";
});
export var Input = styled.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: #00000000;\n  border: none;\n\n  font: 1em Nanum Gothic;\n\n  outline: none;\n\n  ", "\n\n  animation: slideDown 0.5s;\n\n  text-align: ", ";\n"], ["\n  background-color: #00000000;\n  border: none;\n\n  font: 1em Nanum Gothic;\n\n  outline: none;\n\n  ",
    "\n\n  animation: slideDown 0.5s;\n\n  text-align: ", ";\n"])), function (_a) {
    var align = _a.align;
    return !align &&
        "\n      padding: 10px;\n      min-width: 240px;\n  ";
}, function (_a) {
    var align = _a.align;
    return align || "left";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map