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
import { CodeCurly, TrashAlt, Plus } from "styled-icons/boxicons-regular";
export var Add = function (props) { return (React.createElement(Plus, { onClick: props.onClick, size: 18, style: {
        animation: "slideLeft 0.5s",
        transform: props.rotate ? "rotate(45deg)" : "rotate(0deg)"
    } })); };
export var Export = function (props) { return (React.createElement(CodeCurly, __assign({}, props, { size: 18, style: {
        animation: "slideLeft 1s"
    } }))); };
export var Delete = function (props) { return (React.createElement(TrashAlt, __assign({}, props, { size: 18, style: {
        animation: "slideLeft 1.5s"
    } }))); };
//# sourceMappingURL=icons.js.map