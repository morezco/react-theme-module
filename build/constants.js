import { createContext } from "react";
// Final context definition
export var Context = createContext({
    _sdtrs: function (s) { },
    theme: {
        name: "Theme",
        names: ["Theme"],
        set: function (name) { },
        change: function () { },
    },
    devtools: {
        open: false,
        rendered: false,
        toggle: function () { },
        code: {
            input: "",
            output: "",
            override: "",
            set: function () { },
        },
    },
    context: {
        add: function (name, values) { },
        set: function (property, value) { },
        unset: function (property) { },
        select: function (context, only) { },
    },
    reload: {
        reload: false,
        set: function (status) { },
    },
    contexts: {},
});
//# sourceMappingURL=constants.js.map