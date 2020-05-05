import React from "react";
import { ThemeContext } from "../../../constants";
import { Container } from "./styles";
import { clicks } from "../../constants";

import Header from "./Header/Header";
import Variables from "./Variables/Variables";
import List from "./List/List";

export default function Context({
  output,
  selected,
  children,
  variables,
}: ThemeContext & {
  children: string;
  key: any;
}) {
  return (
    <Container selected={selected}>
      <div {...clicks}>
        <Header>{children}</Header>
        <Variables {...variables} />
        <List context={children} data={output} />
      </div>
    </Container>
  );
}
