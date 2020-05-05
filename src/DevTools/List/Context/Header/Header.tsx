import React, { useContext } from "react";
import { U } from "../../../../helpers";
import { clicks } from "../../../constants";
import { Context } from "../../../../constants";
import { Container } from "./styles";

interface Props {
  children: string;
}

export default function Header({ children }: Props) {
  const { devtools, context, contexts } = useContext(Context);

  return (
    <Container>
      <div {...clicks}>
        <h2 onClick={() => context.select(children, true)}>{U(children)}</h2>
        <div>
          <h1
            onClick={() =>
              devtools.code.set({
                output: JSON.stringify(contexts[children].output, null, 4),
                input: JSON.stringify(contexts[children].input, null, 4),
                override: JSON.stringify(contexts[children].override, null, 4),
              })
            }
          >
            {"{}"}
          </h1>
        </div>
      </div>
    </Container>
  );
}
