var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-height: ", ";\n  overflow: hidden;\n\n  margin: ", ";\n  transform: ", ";\n\n  transition: all 0.3s ease-in-out;\n\n  > header {\n    h1 {\n      ", "\n      ", "\n    }\n  }\n\n  animation: slideDown 1s;\n"], ["\n  max-height: ",
    ";\n  overflow: hidden;\n\n  margin: ", ";\n  transform: ", ";\n\n  transition: all 0.3s ease-in-out;\n\n  > header {\n    h1 {\n      ", "\n      ",
    "\n    }\n  }\n\n  animation: slideDown 1s;\n"])), function (_a) {
    var open = _a.open, count = _a.count;
    return open ? String((count || 1) * 60) + "px" : "50px";
}, function (_a) {
    var open = _a.open;
    return open && "10px 0px";
}, function (_a) {
    var open = _a.open;
    return open && "scale(0.99, 0.99)";
}, function (_a) {
    var open = _a.open;
    return open && "margin-left: 10px;";
}, function (_a) {
    var open = _a.open, name = _a.name;
    return open && name && name.length > 20 && "font-size: 1.2em;";
});
export var Header = styled.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #00000044;\n\n  h1 {\n    margin: 0;\n    cursor: pointer;\n\n    span {\n      font-size: 0.8em;\n      opacity: 0.5;\n    }\n  }\n\n  padding: 0px 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  height: 50px;\n\n  div {\n    animation: slideLeft 1s;\n    * {\n      cursor: pointer;\n      margin-right: 5px;\n\n      opacity: 0.7;\n\n      &:hover,\n      &:active {\n        opacity: 1;\n      }\n    }\n  }\n"], ["\n  background-color: #00000044;\n\n  h1 {\n    margin: 0;\n    cursor: pointer;\n\n    span {\n      font-size: 0.8em;\n      opacity: 0.5;\n    }\n  }\n\n  padding: 0px 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  height: 50px;\n\n  div {\n    animation: slideLeft 1s;\n    * {\n      cursor: pointer;\n      margin-right: 5px;\n\n      opacity: 0.7;\n\n      &:hover,\n      &:active {\n        opacity: 1;\n      }\n    }\n  }\n"])));
export var List = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: auto;\n\n  padding: 0px 10px;\n\n  background-color: #00000044;\n"], ["\n  height: auto;\n\n  padding: 0px 10px;\n\n  background-color: #00000044;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map