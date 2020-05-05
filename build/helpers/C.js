import { U } from "./U";
export var C = function (contextName) {
    return contextName === "DevTools" ? "DevTools" : "<" + U(contextName) + " />";
};
//# sourceMappingURL=C.js.map