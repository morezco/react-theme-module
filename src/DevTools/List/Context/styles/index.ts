import styled from "styled-components";

interface Props {
  selected: boolean;
}

export const Container = styled.div<Props>`
  height: auto;
  max-height: ${({ selected }) => (selected ? "1000px" : "60px")};

  overflow: hidden;

  transition: all 0.3s ease-in-out;
`;
