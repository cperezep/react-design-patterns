import React from "react";
import styled from "styled-components";
import type { Person } from "../../../../types/person";

type LargePersonItemProps = {
  person: Person;
};

function LargePersonItem({ person }: LargePersonItemProps) {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <StyledList>
        {hobbies.map((hobby: string) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export { LargePersonItem };
