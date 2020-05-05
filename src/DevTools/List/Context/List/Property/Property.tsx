import React from "react";

import { Container } from "./styles";

import Name from "./Name/Name";
import Input from "./Input/Input";

interface Props {
  children: string;
  context: string;
  name: string;
  key: string;
}

export default function Property({ context, children, name }: Props) {
  return (
    <Container>
      <Name>{name}</Name>
      <Input property={name} context={context} value={children} />
    </Container>
  );
}
