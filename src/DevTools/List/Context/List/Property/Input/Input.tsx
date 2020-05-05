import React, { useContext } from "react";
import { Context } from "../../../../../../constants";

import { Container, Element } from "./styles";

interface Props {
  property: string;
  context: string;
  value: string;
}

export default function Input({ property, context, value }: Props) {
  const controller = useContext(Context);

  const handler = (e: any) => {
    const {
      target: { value },
    } = e;

    controller.context.set(context)(property, value);
    controller.reload.set(true);
  };

  return (
    <Container>
      <Element value={value} onChange={handler} />
    </Container>
  );
}
