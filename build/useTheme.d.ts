import { ThemeJSON } from "./constants";
declare type ThemeHookReturn = {
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
export declare function useTheme(component?: string, config?: ThemeJSON, variables?: {
    [variableName: string]: string;
}): ThemeHookReturn;
export {};
