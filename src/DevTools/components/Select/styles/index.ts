import styled from "styled-components";

interface Props {
  open: boolean;
  transitioning: boolean;
  size: number;
}

export const Container = styled.div<Props>`
  position: relative;

  width: 100%;
  max-width: 200px;
  min-height: 40px;
  height: ${({ size }) => size * 40}px;
  max-height: ${({ open, transitioning }) =>
    !open
      ? transitioning
        ? "300px"
        : "40px"
      : transitioning
      ? "40px"
      : "300px"};
  overflow-y: ${({ open, transitioning }) =>
    open && !transitioning ? "visible" : "hidden"};

  cursor: pointer;

  * {
    text-align: right;
    margin: 5px 0;
  }

  &,
  * {
    color: white;
  }

  > p {
    margin-top: 17px;
    font-weight: 600;
  }

  transition: all 0.18s ease-in-out;
`;

export const List = styled.div`
  padding: 0 5px;
  width: 100%;

  position: absolute;
`;
