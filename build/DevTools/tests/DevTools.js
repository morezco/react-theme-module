var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
import { Themed, useTheme, DevTools } from "../../index";
var Square = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n\n  cursor: pointer;\n\n  box-shadow: ", ";\n\n  transition: all 0.3s ease-in-out;\n\n  background-color: ", ";\n  color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n\n  cursor: pointer;\n\n  box-shadow: ",
    ";\n\n  transition: all 0.3s ease-in-out;\n\n  background-color: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    var _b;
    return ((_b = theme.size) === null || _b === void 0 ? void 0 : _b.width) || "300px";
}, function (_a) {
    var theme = _a.theme;
    var _b;
    return ((_b = theme.size) === null || _b === void 0 ? void 0 : _b.height) || "300px";
}, function (_a) {
    var theme = _a.theme;
    var _b;
    return ((_b = theme.size) === null || _b === void 0 ? void 0 : _b.font) || "1em";
}, function (_a) {
    var theme = _a.theme;
    var _b;
    return ((_b = theme.landing) === null || _b === void 0 ? void 0 : _b.shadow) || "0px 0px 25px #00000044";
}, function (_a) {
    var theme = _a.theme;
    var _b;
    return (_b = theme.landing) === null || _b === void 0 ? void 0 : _b.backgroundColor;
}, function (_a) {
    var theme = _a.theme;
    var _b;
    return (_b = theme.landing) === null || _b === void 0 ? void 0 : _b.text;
});
var theme = {
    light: {
        backgroundColor: "white",
        color: "black",
    },
    dark: {
        backgroundColor: "black",
        color: "white",
    },
};
var Environment = function () {
    var Themes = useTheme("Test", theme).Themes;
    return (React.createElement(Themed, null,
        React.createElement(Square, null),
        React.createElement(DevTools, null)));
};
var templateObject_1;
//# sourceMappingURL=DevTools.js.map