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
import React, { useContext, useCallback } from "react";
import { ThemeContext } from "styled-components";
import { Config as Configuration } from "../../DevTools";
import { U, copy, map } from "../../../helpers";
import { Container, Header, List } from "./styles";
import { Add, Delete, Export } from "./styles/icons";
import Property from "./Property/Property";
function Title(_a) {
    var children = _a.children;
    return (React.createElement("h1", null,
        React.createElement("span", null, "< "),
        U(children),
        React.createElement("span", null, " />")));
}
export default function Context(_a) {
    var name = _a.name, data = _a.data;
    var _b;
    var _c = useContext(Configuration), contexts = _c.contexts, toggleContextValue = _c.toggleContextValue, set = _c.set;
    var For = useContext(ThemeContext).For;
    var Remove = For("DevTools").Remove;
    var toggle = function (property) { return function (e) {
        e.stopPropagation();
        toggleContextValue(name, property)();
    }; };
    var clipboard = useCallback(function () { return copy(data); }, [data]);
    var _d = (contexts && contexts[name]) || {}, open = _d.open, addingProperty = _d.addingProperty;
    var count = ((_b = Object.entries(data || {})) === null || _b === void 0 ? void 0 : _b.length) + (addingProperty ? 2 : 1);
    return (React.createElement(Container, { count: count, name: name, open: open },
        React.createElement(Header, { onClick: toggle("open") },
            React.createElement(Title, null, name),
            open && (React.createElement("div", { onClick: function (e) { return e.stopPropagation(); } },
                React.createElement(Add, { rotate: addingProperty, onClick: toggle("addingProperty") }),
                React.createElement(Export, { onClick: clipboard, onDoubleClick: set("code", JSON.stringify(data, null, 2)) }),
                React.createElement(Delete, { onClick: function () { return Remove(name); } })))),
        open && (React.createElement(List, null,
            map(data, function (params) { return (React.createElement(Property, __assign({ context: name }, params))); }),
            addingProperty && React.createElement(Property, { context: name })))));
}
//# sourceMappingURL=Context.js.map