import React from "react";
import type { Person } from "../../../../types/person";

type SmallPersonItemProps = {
  person: Person;
};

function SmallPersonItem({ person }: SmallPersonItemProps) {
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
}

export { SmallPersonItem };
