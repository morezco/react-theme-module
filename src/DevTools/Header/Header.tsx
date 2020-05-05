import React from "react";
import { ITheme } from "../../constants";
import { Container } from "./styles";
import { U } from "../../helpers";

export default function Header({
  name,
  change,
  event,
}: ITheme & { event: any }) {
  return (
    <Container onDoubleClick={event}>
      <h1 onClick={change as any}>{U(name)}</h1>
    </Container>
  );
}
