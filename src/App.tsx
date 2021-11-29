import React from "react";
import styled from "styled-components";
import { Usage as SplitScreen } from "./design-patterns/layout-components/split-screen/Usage";
import { Usage as ListItems } from "./design-patterns/layout-components/list-items/Usage";
import { Modal } from "./design-patterns/layout-components/modal";

function App() {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <h1>React Design Patterns</h1>
      </StyledTitleContainer>

      <StyledPatternContainer>
        <h2>Split Screen</h2>
        <SplitScreen />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>List Items</h2>
        <ListItems />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Modal</h2>
        <Modal>
          <h3>Hello World!</h3>
          <p>I'm a modal</p>
        </Modal>
      </StyledPatternContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
`;

const StyledTitleContainer = styled.div`
  background-color: #1428a0;
  color: white;
  padding: 35px;

  > h1 {
    margin: 0;
  }
`;

const StyledPatternContainer = styled.div`
  padding: 30px;
  border-bottom: 2px solid #d3d3d3;

  &:last-child {
    boder: none;
  }

  > h2 {
    margin-top: 0;
  }
`;

export default App;
