import React, { useState, useCallback, useMemo } from "react";

import { ThemeProvider } from "styled-components";
import {
  Context,
  ThemeJSON,
  variable,
  ThemeContext,
  timedThemes,
} from "./constants";

import { Load, Save, clone } from "./helpers";

interface Props {
  children: any;

  initial?: string;
  themes?: Array<string>;

  OSPreference?: string;

  forgetful?: boolean;

  times?: timedThemes;
}

const LS_DevTools = "theme_devtools";

export const Themed = ({
  initial = "Theme",
  themes = ["Theme"],
  forgetful = false,
  OSPreference,
  times,
  children,
}: Props) => {
  const [_theme, _setTheme] = useState<string>(
    (!forgetful && Load("theme")) || initial
  );
  const [_themes] = useState<Array<string>>(themes);
  const [_renderedDevtools, _setRenderedDevtools] = useState<boolean>(false);
  const [_devtools, _setDevtools] = useState<boolean>(
    !!(Load(LS_DevTools) || false)
  );
  const [_contexts, _setContexts] = useState<{
    [context: string]: ThemeContext;
  }>({});

  const set = useCallback(
    (name: string, isRestoring = false) => {
      name = name.toLowerCase();

      if (themes?.includes(name)) {
        _setTheme(name);
        if (!forgetful) {
          Save("theme", name);
        }
      } else {
        throw new Error(
          `attempted to ${
            isRestoring ? "restore" : "set"
          } non-existent theme "${name}". Be sure to pass all of your possible palette names into the themes prop of your <Themed /> context.`
        );
      }
    },
    [_setTheme, forgetful, themes]
  );

  useMemo(() => {
    if (OSPreference) {
      set(OSPreference, true);
    } else if (times) {
      const now = new Date().getHours();
      let eligible: Array<string> | Array<number> = Object.keys(times).filter(
        (key: string) => Number(key) >= now
      );
      if (!eligible.length) {
        eligible.push(Object.keys(times)[0]);
      }

      eligible = eligible.map((x: string) => Number(x));

      const selection = times[Math.min(...eligible)];

      set(selection, true);
    } else {
      if (!_themes?.includes(_theme)) {
        _setTheme(_themes[0]);
      }
    }
  }, [_themes, _theme, set, OSPreference, times]);

  const change = useCallback(() => {
    const current = themes?.indexOf(_theme) || 0;
    const name =
      current === _themes?.length - 1 ? _themes[0] : _themes[current + 1];

    _setTheme(name);
    Save("theme", name);
  }, [_theme, _themes, themes]);

  const toggleDevTools = useCallback(
    (force?: boolean) => {
      if (_renderedDevtools) {
        _setDevtools(force || !_devtools);
      }
    },
    [_devtools, _renderedDevtools]
  );

  const _sdtrs = useCallback((s: boolean) => _setRenderedDevtools(s), [
    _setRenderedDevtools,
  ]);

  const add = useCallback(
    (
      name: string,
      config: ThemeJSON,
      variables: { [variable: string]: string }
    ) => {
      const original = clone(config);
      const res: { [property: string]: string } = {};

      console.log(config, original);

      for (let property in config[_theme]) {
        if (
          typeof config[_theme][property] !== "string" &&
          variables &&
          variables[property]
        ) {
          for (let word in (config[_theme][property] as variable)[
            variables[property]
          ]) {
            for (let key in config[_theme]) {
              if (typeof config[_theme][key] === "string") {
                config[_theme][key] = (config[_theme][key] as string).replace(
                  word,
                  (config[_theme][property] as variable)[variables[property]][
                    word
                  ] as string
                );
              }
            }
          }
        }
      }

      _setContexts((current: any) => ({
        ...current,
        [name]: {
          input: original,
          output: (function () {
            for (let property in config[_theme]) {
              if (typeof config[_theme][property] === "string") {
                res[property] =
                  current[name]?.override[_theme]?.[property] ||
                  (config[_theme][property] as string);
              }
            }

            return res;
          })(),
          selected: current[name]?.selected || false,
          override: { ...current[name]?.override } || {},
        },
      }));
    },
    [_theme, _setContexts]
  );

  const setProperty = useCallback(
    (context: string) => (property: string, value: string) => {
      _setContexts({
        ..._contexts,
        [context]: {
          ..._contexts[context],
          [property]: value,
        },
      });
    },
    [_setContexts, _contexts]
  );

  const unset = useCallback(
    (context: string) => (property: string) => {
      if (_contexts[context]?.override[property]) {
        const next: any = clone(_contexts);
        delete next[context]?.override[property];
        _setContexts(next);
      }
    },
    [_setContexts, _contexts]
  );

  const output = useMemo(() => {
    const res: any = {};

    Object.entries(_contexts).forEach(
      ([name, { output }]) => (res[name] = clone(output))
    );

    return res;
  }, [_contexts]);

  return (
    <Context.Provider
      value={{
        _sdtrs,
        theme: {
          name: _theme,
          names: _themes,
          set,
          change,
        },
        devtools: {
          open: _devtools,
          rendered: _renderedDevtools,
          toggle: toggleDevTools,
        },
        context: {
          add,
          set: setProperty,
          unset,
        },
        contexts: _contexts,
      }}
    >
      <ThemeProvider theme={output}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
