interface Props {
    context: string;
    data: {
        [name: string]: string;
    };
}
export default function List({ data, context }: Props): JSX.Element;
export {};
