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
const LS_Context = "theme_open_context";

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
  const [_reload, _setReload] = useState<boolean>(false);
  const [_renderedDevtools, _setRenderedDevtools] = useState<boolean>(false);
  const [_devtools, _setDevtools] = useState<boolean>(
    !!(Load(LS_DevTools) || false)
  );
  const [_contexts, _setContexts] = useState<{
    [context: string]: ThemeContext;
  }>({});
  const [_code, _setCode] = useState<{
    input: string;
    output: string;
    override: string;
  }>({
    input: "",
    output: "",
    override: "",
  });

  const set = useCallback(
    (name: string, isRestoring = false) => {
      if (name && typeof name === "string" && name.length && name.toLowerCase) {
        name = name.toLowerCase();
      }

      if (themes?.includes(name)) {
        _setTheme(name);
        if (!forgetful) {
          Save("theme", name);
        }
      } else {
        throw new Error(
          `Attempted to ${
            isRestoring ? "restore" : "set"
          } non-existent theme "${name}". Be sure to pass all of your possible palette names into the themes prop.`
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
        Save(LS_DevTools, String(force || !_devtools));
      }
    },
    [_devtools, _setDevtools, _renderedDevtools]
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
      const vars: {
        dictionary: {
          [variable: string]: {
            [value: string]: { [replacee: string]: string };
          };
        };
        current: { [variable: string]: string };
      } = {
        dictionary: {},
        current: {},
      };

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

      for (let property in config[_theme]) {
        if (typeof config[_theme][property] === "string") {
          res[property] =
            _contexts[name]?.override[_theme]?.[property] ||
            (config[_theme][property] as string);
        } else {
          vars.dictionary[property] = config[_theme][property] as variable;
          vars.current = variables;
        }
      }

      _setContexts((current: any) => ({
        ...current,
        [name]: {
          input: original,
          output: res,
          variables: vars,
          selected:
            current[name]?.selected || Load(LS_Context) === name || false,
          override: { ...current[name]?.override } || {},
        },
      }));
    },
    [_theme, _contexts, _setContexts]
  );

  const setProperty = useCallback(
    (context: string) => (property: string, value: string) => {
      _setContexts((current: any) => ({
        ...current,
        [context]: {
          ...current[context],
          output: {
            ...current[context].output,
            [property]:
              current[context].output[property] ||
              current[context].override[property],
          },
          override: current[context].override
            ? {
                ...current[context].override,
                [_theme]: {
                  ...current[context].override[_theme],
                  [property]: value,
                },
              }
            : {
                [_theme]: {
                  [property]: value,
                },
              },
        },
      }));
    },
    [_setContexts, _theme]
  );

  const select = useCallback(
    (context: string, only = false) => {
      if (_contexts[context]) {
        _setContexts((current: any) => {
          Save(LS_Context, !current[context].selected ? context : "");

          if (!only) {
            return {
              ...current,
              [context]: {
                ...current[context],
                selected: !current[context].selected,
              },
            };
          } else {
            const res: typeof current | {} = {};
            for (let key in current) {
              res[key] = clone(current[key]);
              res[key].selected = key === context && !current[context].selected;
            }
            return res;
          }
        });
      }
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

    Object.entries(_contexts).forEach(([name, { output }]) => {
      res[name] = clone(output);
    });

    for (let key in _contexts) {
      if (_contexts[key].override?.[_theme]) {
        for (let property in _contexts[key].override?.[_theme]) {
          res[key][property] = _contexts[key].override?.[_theme][property];
        }
      }
    }

    return res;
  }, [_contexts, _theme]);

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
          code: {
            ..._code,
            set: _setCode,
          },
        },
        context: {
          add,
          set: setProperty,
          unset,
          select,
        },
        reload: {
          reload: _reload,
          set: _setReload,
        },
        contexts: _contexts,
      }}
    >
      <ThemeProvider theme={output}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
