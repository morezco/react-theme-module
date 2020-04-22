var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import styled from "styled-components";
import { TimesCircle } from "styled-icons/fa-regular";
export var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 30px;\n  width: 100%;\n  max-width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  animation: fadeIn 0.5s;\n\n  overflow: hidden;\n\n  div {\n    overflow: hidden;\n\n    text-overflow: clip;\n    text-overflow: ellipsis;\n    text-overflow: \"\u2026\";\n    text-overflow: fade;\n    text-overflow: fade(10px);\n    text-overflow: fade(5%);\n    white-space: nowrap;\n\n    max-width: 150px;\n    max-height: 30px;\n\n    display: flex;\n    align-items: center;\n\n    *:not(input) {\n      margin: 0px 2px;\n    }\n\n    p {\n      margin-right: 5px;\n    }\n  }\n"], ["\n  height: 30px;\n  width: 100%;\n  max-width: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  animation: fadeIn 0.5s;\n\n  overflow: hidden;\n\n  div {\n    overflow: hidden;\n\n    text-overflow: clip;\n    text-overflow: ellipsis;\n    text-overflow: \"\u2026\";\n    text-overflow: fade;\n    text-overflow: fade(10px);\n    text-overflow: fade(5%);\n    white-space: nowrap;\n\n    max-width: 150px;\n    max-height: 30px;\n\n    display: flex;\n    align-items: center;\n\n    *:not(input) {\n      margin: 0px 2px;\n    }\n\n    p {\n      margin-right: 5px;\n    }\n  }\n"])));
export var Delete = function (props) { return React.createElement(TimesCircle, __assign({}, props, { size: 16 })); };
export var Input = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #00000000;\n  border: none;\n\n  font: 1em Nanum Gothic;\n\n  outline: none;\n\n  max-width: 100px;\n  margin-right: 5px;\n\n  animation: slideDown 0.5s;\n\n  text-align: ", ";\n"], ["\n  background-color: #00000000;\n  border: none;\n\n  font: 1em Nanum Gothic;\n\n  outline: none;\n\n  max-width: 100px;\n  margin-right: 5px;\n\n  animation: slideDown 0.5s;\n\n  text-align: ", ";\n"])), function (_a) {
    var align = _a.align;
    return align || "left";
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map