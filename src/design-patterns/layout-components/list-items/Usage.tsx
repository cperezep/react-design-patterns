import React from "react";
import styled from "styled-components";
import { LargePersonItem } from "./components/LargePersonItem";
import { SmallPersonItem } from "./components/SmallPersonItem";
import { SmallProductItem } from "./components/SmallProductItem";
import { RegularList } from "./RegularList";

export type Person = {
  name: string;
  age: number;
  hairColor: string;
  hobbies: Array<string>;
};

export type Product = {
  name: string;
  price: string;
  description: string;
  rating: number;
};

function Usage() {
  // The regular way of doing this is not to have this reusable list component.
  // It's, instead, to create a large person list item list and a small person list item list that then display those components.
  // So, as you can see, the way that we've done it here makes the regular list a lot more reusable.
  // We're able to simply pass in the component that we want to be displayed as children of this list.
  return (
    <StyledContainer>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonItem}
      />
    </StyledContainer>
  );
}

const people: Array<Person> = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products: Array<Product> = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

const StyledContainer = styled.div`
  text-align: start;
`;

export { Usage };
