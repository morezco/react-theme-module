import styled from "styled-components";

export const Container = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.7em;

    > div {
      font-family: monospace;
      display: flex;
      align-items: center;
      justify-content: space-around;

      * {
        margin: 0 5px;
      }

      padding: 0 0 0 20px;
    }
  }

  padding: 0 10px;

  color: white;

  background-color: #00000044;
`;
