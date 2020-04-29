import { createContext } from "react";

export type timedThemes = {
  [time: number]: string;
};

export type variable = {
  [value: string]: {
    [property: string]: string;
  };
};

export type ThemeJSON = {
  [palette: string]: {
    [property: string]: string | variable;
  };
};

export type ThemeContext = {
  input: ThemeJSON;
  output: {
    [property: string]: string;
  };
  override: {
    [palette: string]: {
      [property: string]: string;
    };
  };
  selected: boolean;
};

export type IThemed = {
  _sdtrs: Function;
  theme: {
    name: string;
    names: Array<string>;
    set: Function;
    change: Function;
  };
  devtools: {
    open: boolean;
    rendered: boolean;
    toggle: Function;
  };
  context: {
    add: Function;
    set: Function;
    unset: Function;
  };
  contexts: { [x: string]: ThemeContext };
};

export const Context = createContext<IThemed>({
  _sdtrs: (s: boolean) => {},
  theme: {
    name: "Theme",
    names: ["Theme"],
    set: (name: string) => {},
    change: () => {},
  },
  devtools: {
    open: false,
    rendered: false,
    toggle: () => {},
  },
  context: {
    add: (name: string, values: any) => {},
    set: (property: string, value: string | variable) => {},
    unset: (property: string) => {},
  },
  contexts: {},
});
