import { ThemeContext } from "../../../constants";
export default function Context({ output, selected, children, variables, }: ThemeContext & {
    children: string;
    key: any;
}): JSX.Element;
