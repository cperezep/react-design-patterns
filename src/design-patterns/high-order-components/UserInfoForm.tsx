import React from "react";
import { Person } from "types/person";

type UserFormProps = {
  user: Person;
  onChangeUser: (changes: Partial<Person>) => void;
  onSaveUser: () => Promise<void>;
  onResetUser: () => void;
};

function UserForm({
  user,
  onChangeUser,
  onSaveUser,
  onResetUser,
}: UserFormProps) {
  return user ? (
    <>
      <label>
        Name:
        <input
          value={user.name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={user.age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
      </label>
      <label>
        Hair Color:
        <input
          value={user.hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
      </label>
      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Save Changes</button>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export { UserForm };
