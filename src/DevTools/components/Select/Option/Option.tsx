import React from "react";

import { Container } from "./styles";

interface Props {
  set: Function;
  children: string;
  value: string;
}

export default function Option({ children, value, set }: Props) {
  return <Container onClick={() => set(value)}>{children}</Container>;
}
