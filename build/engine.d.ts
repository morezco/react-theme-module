import { timedThemes } from "./constants";
interface Props {
    children: any;
    initial?: string;
    themes?: Array<string>;
    OSPreference?: string;
    forgetful?: boolean;
    times?: timedThemes;
}
export declare const Themed: ({ initial, themes, forgetful, OSPreference, times, children, }: Props) => JSX.Element;
export {};
