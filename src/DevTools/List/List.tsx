import React from "react";
import { ThemeContext } from "../../constants";
import { Container } from "./styles";

import Context from "./Context/Context";

interface Props {
  [contextName: string]: ThemeContext;
}

export default function List({ ...contexts }: Props) {
  return (
    <Container>
      {Object.entries(contexts).map(
        ([name, content]: [string, ThemeContext]) => (
          <Context key={name} {...content}>
            {name}
          </Context>
        )
      )}
    </Container>
  );
}
