import React, { useState, useEffect, useCallback } from "react";
import { palette } from "./Theme";
import { ThemeProvider } from "styled-components";
import { Load, Save } from "./helpers";

import { themes } from "./json";

import "./styles/fonts.css";
import "./styles/animations";

export { useTheme } from "./useTheme";
export { DevTools } from "./DevTools/DevTools";

const LS_DevTools = "theme_devtools";

export const Themed = ({ children }: any) => {
  const [Themes, setThemes]: any = useState({});
  const [DevTools, SetDevTools] = useState(Load(LS_DevTools));
  const [Theme, setTheme] = useState<palette>(
    (Load("theme") as palette) || themes[0]
  );

  const Use = useCallback(
    (agent = "") => (name: palette) => {
      name = name.toLowerCase() as palette;

      if (themes.includes(name)) {
        setTheme(name);
        localStorage.setItem("theme", name);

        return true;
      }

      return false;
    },
    []
  );

  const Switch = useCallback(
    (agent = "") => () => {
      const current = themes.indexOf(Theme);
      const name =
        current === themes.length - 1 ? themes[0] : themes[current + 1];

      setTheme(name);
      localStorage.setItem("theme", name);

      return true;
    },
    [Theme]
  );

  const Add = useCallback(
    (agent = "") => (name: string, config: any = {}) => {
      name = name.toLowerCase();

      setThemes((currentThemes: any) => ({
        ...currentThemes,
        [name]: config[Theme],
      }));

      if (!config[Theme]) {
      }
      return true;
    },
    [Theme]
  );

  const Remove = useCallback(
    (agent = "") => (name: string) => {
      name = name.toLowerCase();

      const newState = { ...Themes };
      delete newState[name];
      setThemes(newState);

      return true;
    },
    [Themes]
  );

  const Set = useCallback(
    (agent = "") => (theme: string, property: string, value: string) => {
      theme = theme.toLowerCase();

      setThemes({
        ...Themes,
        [theme]: { ...Themes[theme], [property]: value },
      });

      return true;
    },
    [Themes]
  );

  const Unset = useCallback(
    (agent = "") => (theme: string, property: string) => {
      theme = theme.toLowerCase();

      if (Themes[theme]) {
        if (Themes[theme][property]) {
          const newState = { ...Themes };
          delete newState[theme][property];
          setThemes(newState);

          return true;
        }
      }

      return false;
    },
    [Themes]
  );

  const ToggleDevTools = useCallback(() => {
    SetDevTools(!DevTools);

    Save(LS_DevTools, !DevTools);
  }, [DevTools]);

  const For = useCallback(
    (agent: string) => ({
      Name: Theme,
      Use: Use(agent),
      Switch: Switch(agent),
      Add: Add(agent),
      Remove: Remove(agent),
      Set: Set(agent),
      Unset: Unset(agent),
    }),
    [Theme, Use, Switch, Add, Remove, Set, Unset]
  );

  useEffect(
    useCallback(() => {
      if (Theme === "dark") {
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = "white";
      }
    }, [Theme]),
    [Theme]
  );

  return (
    <ThemeProvider
      theme={{
        Name: Theme,
        Themes,
        Use,
        Switch,
        Add,
        Remove,
        Set,
        Unset,
        DevTools,
        ToggleDevTools,
        For,
        ...Themes,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
