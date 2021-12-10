import React, { ComponentType, useEffect, useState } from "react";
import axios from "axios";
import { Person } from "types/person";

// Allow to edit user info from the server and passing it to the component that we wrap it with.
function withEditableUser<T>(Component: ComponentType<T>, userId: string) {
  // HOC should expect the same exact props T as the target component, well that's not entirely true.
  // Our HOC shouldn't expect props user, onChangeUser, onSaveUser and onResetUser because it's the higher-order component's job to inject these props in the first place.
  // Using Omit, we can tell the HOC to expect all of the props our target component expects, except for the ones it injects:
  return (
    hocProps: Omit<T, "user" | "onChangeUser" | "onSaveUser" | "onResetUser">
  ) => {
    // originalUser: This is going to represent the data that we have on the server side. So as we make changes to the data on the client side, we'll want to have a backup copy of the server side data in case we want to reset to that original data
    const [originalUser, setOriginalUser] = useState<Person>(null);
    const [user, setUser] = useState<Person>(null);

    // Load the user information for edit
    useEffect(() => {
      async function getUser() {
        const { data } = await axios.get<Person>(`/users/${userId}`);
        setOriginalUser(data);
        setUser(data);
      }
      getUser();
    }, []);

    // It's going to be an object containing the things that we want to change about the user.
    function onChangeUser(changes: Partial<Person>) {
      setUser({ ...user, ...changes });
    }

    async function onSaveUser() {
      const { data } = await axios.post<Person>(`/users/${userId}`, { user });
      setOriginalUser(data);
      setUser(data);
    }

    // It's going to do is reset the state of user here to the state of our original user when we first loaded the user from the server.
    // This'll be used if the user is editing something in the user info form and they want to reset it to the way that it was before.
    function onResetUser() {
      setUser(originalUser);
    }

    return (
      <Component
        // Since Omit creates a new type, we had to use a workaround {...(hocProps as T)} to let TypeScript know that we expect the hocProps to be almost identical to T except for the props we omitted
        {...(hocProps as T)}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
}

export { withEditableUser };
