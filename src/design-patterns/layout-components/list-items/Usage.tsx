import React from "react";
import styled from "styled-components";
import { products, users } from "../../../mocks/handlers";
import { LargePersonItem } from "./components/LargePersonItem";
import { SmallPersonItem } from "./components/SmallPersonItem";
import { SmallProductItem } from "./components/SmallProductItem";
import { RegularList } from "./RegularList";

function Usage() {
  // The regular way of doing this is not to have this reusable list component.
  // It's, instead, to create a large person list item list and a small person list item list that then display those components.
  // So, as you can see, the way that we've done it here makes the regular list a lot more reusable.
  // We're able to simply pass in the component that we want to be displayed as children of this list.
  return (
    <StyledContainer>
      <RegularList
        items={users}
        resourceName="person"
        itemComponent={SmallPersonItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductItem}
      />
      <RegularList
        items={users}
        resourceName="person"
        itemComponent={LargePersonItem}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: start;
`;

export { Usage };
