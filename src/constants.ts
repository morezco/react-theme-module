import { createContext } from "react";

// Time primitive
export type timedThemes = {
  [time: number]: string;
};

// JSON primitives
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

// Theme context pieces

export type ThemeContextVariablesBlob = {
  dictionary: {
    [name: string]: {
      [word: string]: {
        replacee: string;
      };
    };
  };
  current: {
    [name: string]: string;
  };
};

// Master object, built from JSON and variables provided to the useTheme() hook
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
  variables: ThemeContextVariablesBlob;
  selected: boolean;
};

// Theme interface blob, part of the object returned by the useTheme() hook
export type ITheme = {
  name: string;
  names: Array<string>;
  set: Function;
  change: Function;
};

// Entire object returned by the useTheme() hook
export type IThemed = {
  _sdtrs: Function;
  theme: ITheme;
  devtools: {
    open: boolean;
    rendered: boolean;
    toggle: Function;
    code: {
      input: string;
      output: string;
      override: string;
      set: Function;
    };
  };
  context: {
    add: Function;
    set: Function;
    unset: Function;
    select: Function;
  };
  reload: {
    reload: boolean;
    set: Function;
  };
  contexts: { [x: string]: ThemeContext };
};

// Final context definition
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
    code: {
      input: "",
      output: "",
      override: "",
      set: () => {},
    },
  },
  context: {
    add: (name: string, values: any) => {},
    set: (property: string, value: string | variable) => {},
    unset: (property: string) => {},
    select: (context: string, only?: boolean) => {},
  },
  reload: {
    reload: false,
    set: (status: boolean) => {},
  },
  contexts: {},
});
