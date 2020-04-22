import { palette, ITheme } from "./Theme";
declare type ThemeHookReturn = {
    Name: string;
    Use: (name: palette) => boolean;
    Switch: () => boolean;
    Add: (theme: string, config: any) => boolean;
    Remove: (theme: string) => boolean;
    Set: (theme: string, property: string, value: string) => boolean;
    Themes: any;
};
export declare function useTheme(component: string, config?: ITheme): ThemeHookReturn;
export {};
