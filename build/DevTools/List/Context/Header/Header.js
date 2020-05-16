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
import React, { useContext } from "react";
import { U } from "../../../../helpers";
import { clicks } from "../../../constants";
import { Context } from "../../../../constants";
import { Container } from "./styles";
export default function Header(_a) {
    var children = _a.children;
    var _b = useContext(Context), devtools = _b.devtools, context = _b.context, contexts = _b.contexts;
    return (React.createElement(Container, null,
        React.createElement("div", __assign({}, clicks),
            React.createElement("h2", { onClick: function () { return context.select(children, true); } }, U(children)),
            React.createElement("div", null,
                React.createElement("h1", { onClick: function () {
                        return devtools.code.set({
                            output: JSON.stringify(contexts[children].output, null, 4),
                            input: JSON.stringify(contexts[children].input, null, 4),
                            override: JSON.stringify(contexts[children].override, null, 4),
                        });
                    } }, "{}")))));
}
//# sourceMappingURL=Header.js.map