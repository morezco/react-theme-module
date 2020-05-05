import { ThemeContext } from "../../constants";
interface Props {
    [contextName: string]: ThemeContext;
}
export default function List({ ...contexts }: Props): JSX.Element;
export {};
