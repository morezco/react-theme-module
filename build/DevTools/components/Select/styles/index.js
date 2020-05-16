var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  width: 100%;\n  max-width: 200px;\n  min-height: 40px;\n  height: ", "px;\n  max-height: ", ";\n  overflow-y: ", ";\n\n  cursor: pointer;\n\n  * {\n    text-align: right;\n    margin: 5px 0;\n  }\n\n  &,\n  * {\n    color: white;\n  }\n\n  > p {\n    margin-top: 17px;\n    font-weight: 600;\n  }\n\n  transition: all 0.18s ease-in-out;\n"], ["\n  position: relative;\n\n  width: 100%;\n  max-width: 200px;\n  min-height: 40px;\n  height: ", "px;\n  max-height: ",
    ";\n  overflow-y: ",
    ";\n\n  cursor: pointer;\n\n  * {\n    text-align: right;\n    margin: 5px 0;\n  }\n\n  &,\n  * {\n    color: white;\n  }\n\n  > p {\n    margin-top: 17px;\n    font-weight: 600;\n  }\n\n  transition: all 0.18s ease-in-out;\n"])), function (_a) {
    var size = _a.size;
    return size * 40;
}, function (_a) {
    var open = _a.open, transitioning = _a.transitioning;
    return !open
        ? transitioning
            ? "300px"
            : "40px"
        : transitioning
            ? "40px"
            : "300px";
}, function (_a) {
    var open = _a.open, transitioning = _a.transitioning;
    return open && !transitioning ? "visible" : "hidden";
});
export var List = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0 5px;\n  width: 100%;\n\n  position: absolute;\n"], ["\n  padding: 0 5px;\n  width: 100%;\n\n  position: absolute;\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map