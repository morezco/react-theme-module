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
import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Config as Configuration } from "../../../DevTools";
import { Container, Delete, Input } from "./styles";
var valActions = {
    13: function (_a) {
        var Set = _a.Set, context = _a.context, key = _a.key, val = _a.val, name = _a.name, setEditing = _a.setEditing;
        var _b, _c;
        Set(context, ((_b = key.current) === null || _b === void 0 ? void 0 : _b.value) || name, (_c = val.current) === null || _c === void 0 ? void 0 : _c.value);
        try {
            key.current.value = "";
            val.current.value = "";
            key.current.focus();
        }
        catch (oof) {
            setEditing(false);
        }
    },
    27: function (_a) {
        var toggleContextValue = _a.toggleContextValue, context = _a.context;
        return toggleContextValue(context, "addingProperty", false)();
    },
};
var keyActions = {
    13: function (params) {
        var _a;
        var e = params.e, val = params.val;
        var value = e.target.value;
        if (e.target.value.includes(":")) {
            e.target.value = value.split(":")[0].trim();
            val.current.value = value
                .split(":")[1]
                .trim()
                .replace(/;/g, "");
            valActions[13](params);
        }
        else {
            (_a = val.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    },
    27: function (_a) {
        var toggleContextValue = _a.toggleContextValue, context = _a.context;
        return toggleContextValue(context, "addingProperty", false)();
    },
};
export default function Property(_a) {
    var context = _a.context, name = _a.name, value = _a.value;
    var For = useContext(ThemeContext).For;
    var toggleContextValue = useContext(Configuration).toggleContextValue;
    var _b = For("DevTools"), Set = _b.Set, Unset = _b.Unset;
    var key = useRef(null);
    var val = useRef(null);
    var _c = useState(!name), editing = _c[0], setEditing = _c[1];
    var handlerParams = {
        Set: Set,
        context: context,
        name: name,
        key: key,
        val: val,
        setEditing: setEditing,
        toggleContextValue: toggleContextValue,
    };
    var keyHandler = function (e) {
        return keyActions[e.keyCode] && keyActions[e.keyCode](__assign({ e: e }, handlerParams));
    };
    var valHandler = function (e) {
        return valActions[e.keyCode] && valActions[e.keyCode](__assign({ e: e }, handlerParams));
    };
    return (React.createElement(Container, null,
        React.createElement("div", null, (name && (React.createElement(React.Fragment, null,
            React.createElement(Delete, { onClick: function () { return Unset(context, name, value); } }),
            React.createElement("label", null, name)))) || (React.createElement(Input, { ref: key, defaultValue: name, autoFocus: true, onKeyUp: keyHandler, name: "key" }))),
        React.createElement("div", null, (!editing && (React.createElement("p", { onDoubleClick: function () {
                setEditing(true);
                setTimeout(function () {
                    var _a;
                    (_a = val.current) === null || _a === void 0 ? void 0 : _a.focus();
                }, 200);
            } }, value))) || (React.createElement(Input, { autoFocus: !key, ref: val, defaultValue: value, onKeyUp: valHandler, name: "value", align: "right" })))));
}
//# sourceMappingURL=Property.js.map