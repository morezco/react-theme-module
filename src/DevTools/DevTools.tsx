import React, { useEffect, useContext } from "react";
import { Context } from "../constants";
import { clicks } from "./constants";
import { Container, Code } from "./styles";

import Header from "./Header/Header";
import List from "./List/List";

export function DevTools() {
  const { _sdtrs, theme, devtools, contexts } = useContext(Context);

  useEffect(() => {
    _sdtrs(true);
    return () => _sdtrs(false);
  }, [_sdtrs]);

  return (
    <>
      {devtools.code.input && (
        <Code onDoubleClick={() => devtools.code.set("")}>
          <h2>Input</h2>
          {devtools.code.input}
          <h2>Output</h2>
          {devtools.code.output}
          <h2>Override</h2>
          {devtools.code.override}
        </Code>
      )}

      <Container {...devtools}>
        <div {...clicks}>
          <Header event={devtools.toggle} {...theme} />
          <List {...contexts} />
        </div>
      </Container>
    </>
  );
}
