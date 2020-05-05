import React from "react";
import { ThemeContextVariablesBlob } from "../../../../constants";
import { Container, List } from "./styles";

import Header from "./Header/Header";
import { Select } from "../../../components";

export default function Variables({
  current,
  dictionary,
}: ThemeContextVariablesBlob) {
  return Object.entries(dictionary).length ? (
    <Container>
      <Header />
      <List>
        {Object.entries(dictionary).map(([name, value]: [string, any]) => (
          <div key={name}>
            <p>{name}</p>
            <Select
              options={Object.keys(value)}
              state={current[name]}
              set={() => {}}
            />
          </div>
        ))}
      </List>
      <hr />
    </Container>
  ) : null;
}
