import React from "react";

import { Container } from "./styles";

interface Props {
  children: string;
}

export default function Name({ children }: Props) {
  return <Container>{children}</Container>;
}
