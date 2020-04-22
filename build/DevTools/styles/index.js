var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Container = styled.aside(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &,\n  * {\n    transition: all 0.3s ease-in-out;\n    color: white;\n  }\n\n  background-color: #00000044;\n\n  position: fixed;\n  right: 0;\n  top: 0;\n\n  height: 100vh;\n  width: 300px;\n  max-height: 100vh;\n\n  font: 0.7em Nanum Gothic;\n\n  ", "\n\n  * {\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  border-left: dashed 1px #ffffff22;\n"], ["\n  &,\n  * {\n    transition: all 0.3s ease-in-out;\n    color: white;\n  }\n\n  background-color: #00000044;\n\n  position: fixed;\n  right: 0;\n  top: 0;\n\n  height: 100vh;\n  width: 300px;\n  max-height: 100vh;\n\n  font: 0.7em Nanum Gothic;\n\n  ",
    "\n\n  * {\n    ::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  border-left: dashed 1px #ffffff22;\n"])), function (_a) {
    var open = _a.open;
    return "\n    max-height: " + (!open ? "60px" : "100vh") + ";\n    max-width: " + (open ? "300px" : "180px") + ";\n\n    > header {\n      padding: " + (open ? "10px 40px" : "0px 30px") + ";\n\n      " + (!open && "margin: -20px;") + "\n    }\n  ";
});
export var Code = styled.code(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: white;\n  white-space: pre;\n\n  display: flex;\n  align-items: center;\n\n  font-family: monospace;\n\n  position: fixed;\n\n  background-color: #000000dd;\n\n  overflow: hidden;\n  max-width: 300px;\n  width: 100%;\n  height: 100vh;\n  right: 0;\n  top: 0;\n\n  animation: fadeIn 0.3s;\n\n  p {\n    padding: 20px;\n  }\n"], ["\n  color: white;\n  white-space: pre;\n\n  display: flex;\n  align-items: center;\n\n  font-family: monospace;\n\n  position: fixed;\n\n  background-color: #000000dd;\n\n  overflow: hidden;\n  max-width: 300px;\n  width: 100%;\n  height: 100vh;\n  right: 0;\n  top: 0;\n\n  animation: fadeIn 0.3s;\n\n  p {\n    padding: 20px;\n  }\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map