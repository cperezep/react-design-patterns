import React from "react";
import styled from "styled-components";

type SplitScreenProps = {
  children: JSX.Element[];
};

const StyledContainer = styled.div`
  display: flex;
`;

const StyledPane = styled.div`
  flex: 1;
`;

function SplitScreen({ children }: SplitScreenProps) {
  const [left, right] = children;
  return (
    <StyledContainer>
      <StyledPane>{left}</StyledPane>
      <StyledPane>{right}</StyledPane>
    </StyledContainer>
  );
}

export { SplitScreen };
