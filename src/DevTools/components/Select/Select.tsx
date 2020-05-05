import React, { useState, useEffect, useCallback, useMemo } from "react";

import { Container, List } from "./styles";

import Element from "./Option/Option";

type Option = {
  value: string;
  display: string;
};

interface Props {
  open?: boolean;

  options: Array<Option | string>;
  state: string;
  set: Function;
}

export function Select({ open, options, state, set }: Props) {
  const [init, setInit] = useState(false);

  const [_open, _setOpen] = useState(false);
  const [transition, setTransition] = useState(false);

  const setOpenState = (state: boolean) => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
      _setOpen(state);
    }, 300);
  };

  useEffect(() => setInit(true), []);

  useEffect(
    useCallback(() => {
      if (init) {
        setOpenState(!!open);
      }
    }, [init, open]),
    [open]
  );

  const _options = useMemo(
    () =>
      options.map((option: Option | string) =>
        typeof option === "string" ? { value: option, display: option } : option
      ),
    [options]
  );

  return (
    <Container
      onClick={() => setOpenState(!_open)}
      open={_open}
      transitioning={transition}
      size={_options.length}
    >
      <p>{state}</p>
      {(_open || (!_open && transition)) && (
        <List>
          {_options.map((o: Option, i: number) =>
            state !== o.value ? (
              <Element key={i} set={set} value={o.value}>
                {o.display}
              </Element>
            ) : null
          )}
        </List>
      )}
    </Container>
  );
}
