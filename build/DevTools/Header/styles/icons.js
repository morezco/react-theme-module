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
import * as Entypo from "styled-icons/entypo";
import * as Material from "styled-icons/material";
export var Pin = function (props) { return React.createElement(Entypo.Pin, __assign({}, props, { size: 24 })); };
export var Add = function (props) { return (React.createElement(Material.Add, { style: {
        transition: "all 0.3s ease-in-out",
        transform: props.rotate ? "rotate(45deg)" : "rotate(0deg)",
    }, onClick: props.onClick, size: 24 })); };
export var Palette = function (props) { return (React.createElement(Material.Palette, __assign({}, props, { size: 48 }))); };
//# sourceMappingURL=icons.js.map