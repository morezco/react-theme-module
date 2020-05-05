export declare type timedThemes = {
    [time: number]: string;
};
export declare type variable = {
    [value: string]: {
        [property: string]: string;
    };
};
export declare type ThemeJSON = {
    [palette: string]: {
        [property: string]: string | variable;
    };
};
export declare type ThemeContextVariablesBlob = {
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
export declare type ThemeContext = {
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
export declare type ITheme = {
    name: string;
    names: Array<string>;
    set: Function;
    change: Function;
};
export declare type IThemed = {
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
    contexts: {
        [x: string]: ThemeContext;
    };
};
export declare const Context: import("react").Context<IThemed>;
