import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;

  right: 0px;
  top: 0px;

  width: 300px;
  height: 100vw;
  max-height: ${({ open }) => (open ? "100vw" : "80px;")};

  background-color: #000000aa;

  overflow: hidden;

  transition: all 0.3s ease-in-out;
`;

export const Code = styled.pre<{
  offset?: number;
}>`
  position: fixed;
  top: -20px;
  left: 0;

  padding: 30px;

  width: 100vw;
  height: 100vh;

  background-color: #000000cc;
  color: white;

  z-index: 100000000;
`;
