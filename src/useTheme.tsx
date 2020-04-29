import { useEffect, useCallback, useContext } from "react";
import { Context, ThemeJSON } from "./constants";

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
  const { theme, devtools, context, contexts } = useContext(Context);

  useEffect(
    useCallback(() => {
      if (component) {
        context.add(component, config || {}, variables);
      }
    }, [context, component, config, variables]),
    [theme.name]
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
