import { useState, useEffect, useCallback, useContext } from "react";
import { Context, ThemeJSON } from "./constants";
import { differs } from "./helpers";

type ThemeHookReturn = {
  theme: {
    current: string;
    all: Array<string>;
    set: Function;
    change: any;
  };
  devtools: {
    open: boolean;
    toggle: Function;
  };
  contexts: any;
};

export function useTheme(
  component?: string,
  config?: ThemeJSON,
  variables?: { [variableName: string]: string }
): ThemeHookReturn {
  component = component?.toLowerCase();
  const { theme, devtools, context, contexts, reload } = useContext(Context);

  const [_variables, _setVariables] = useState(variables || {});

  if (variables && differs(variables, _variables)) {
    _setVariables(variables!);
  }

  useEffect(
    useCallback(() => {
      if (component) {
        context.add(component, config || {}, _variables);
        reload.set(false);
      }
    }, [context, component, config, _variables, reload]),
    [theme.name, reload.reload, _variables]
  );

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
    contexts,
  };
}
