import React from "react";
import styled from "styled-components";
import { Person } from "../../types/person";

type UserInfoProps = {
  user?: Person;
};

function UserInfo({ user }: UserInfoProps) {
  return user ? (
    <>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Hair color: {user.hairColor}</p>
      <h3>Hobbies:</h3>
      <StyledList>
        {user.hobbies.map((hobby: string) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </StyledList>
    </>
  ) : (
    <p>Loading...</p>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export { UserInfo };
