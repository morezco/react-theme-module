import { useState, useEffect, useCallback, useContext } from "react";
import { Context } from "./constants";
import { differs } from "./helpers";
export function useTheme(component, config, variables) {
    component = component === null || component === void 0 ? void 0 : component.toLowerCase();
    var _a = useContext(Context), theme = _a.theme, devtools = _a.devtools, context = _a.context, contexts = _a.contexts, reload = _a.reload;
    var _b = useState(variables || {}), _variables = _b[0], _setVariables = _b[1];
    if (variables && differs(variables, _variables)) {
        _setVariables(variables);
    }
    useEffect(useCallback(function () {
        if (component) {
            context.add(component, config || {}, _variables);
            reload.set(false);
        }
    }, [context, component, config, _variables, reload]), [theme.name, reload.reload, _variables]);
    return {
        theme: {
            current: theme.name,
            all: theme.names,
            set: theme.set,
            change: theme.change,
        },
        devtools: {
            open: devtools.open,
            toggle: devtools.toggle,
        },
        contexts: contexts,
    };
}
//# sourceMappingURL=useTheme.js.map