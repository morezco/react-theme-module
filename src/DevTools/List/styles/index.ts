import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 80px);
  width: 300px;

  position: absolute;
  top: 80px;

  overflow-y: scroll;
  overflow-x: hidden;

  transition: all 0.3s ease-in-out;
`;
