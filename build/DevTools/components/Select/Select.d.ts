declare type Option = {
    value: string;
    display: string;
};
interface Props {
    open?: boolean;
    options: Array<Option | string>;
    state: string;
    set: Function;
}
export declare function Select({ open, options, state, set }: Props): JSX.Element;
export {};
