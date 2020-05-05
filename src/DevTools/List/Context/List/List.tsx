import React from "react";

import { Container } from "./styles";

import Property from "./Property/Property";

interface Props {
  context: string;
  data: { [name: string]: string };
}

export default function List({ data, context }: Props) {
  return (
    <Container>
      {Object.entries(data).map(([name, value]: [string, string]) => (
        <Property key={name} context={context} name={name}>
          {value}
        </Property>
      ))}
    </Container>
  );
}
