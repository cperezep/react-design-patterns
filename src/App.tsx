import React from "react";
import styled from "styled-components";
import { Usage as SplitScreen } from "./design-patterns/layout-components/split-screen/Usage";
import { Usage as ListItems } from "./design-patterns/layout-components/list-items/Usage";
import { Usage as ContainerComponents } from "./design-patterns/container-components/Usage";
import { Usage as UncontrolledComponents } from "./design-patterns/uncontrolled-components/Usage";
import { Usage as ControlledComponents } from "./design-patterns/controlled-components/Usage";
import { Usage as HighOrderComponents } from "./design-patterns/high-order-components/Usage";
import { Usage as CustomHooks } from "./design-patterns/custom-hooks/Usage";
import { UncontrolledModal } from "./design-patterns/layout-components/UncontrolledModal";

import { worker } from "./mocks/browser";
worker.start({ onUnhandledRequest: "bypass" });

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
        <UncontrolledModal>
          <h3>Hello World!</h3>
          <p>I'm a modal</p>
        </UncontrolledModal>
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Container Components</h2>
        <ContainerComponents />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Uncontrolled Components</h2>
        <UncontrolledComponents />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Controlled Components</h2>
        <ControlledComponents />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>High Order Components</h2>
        <HighOrderComponents />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Custom Hooks</h2>
        <CustomHooks />
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
