interface Props {
    set: Function;
    children: string;
    value: string;
}
export default function Option({ children, value, set }: Props): JSX.Element;
export {};
