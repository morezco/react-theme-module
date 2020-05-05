import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  max-height: 500px;

  overflow: hidden scroll;
`;

export const List = styled.div`
  padding: 0px 20px 20px 20px;

  > div {
    display: flex;
    justify-content: space-between;

    color: white;
  }
`;
