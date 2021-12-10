import React, { ComponentType, useEffect, useState } from "react";
import axios from "axios";
import { Person } from "types/person";

/*
   Take care of loading user data from the server and passing it to the component that we wrap it with.
   I'll be pretty similar to container components.
*/
function withUser<T>(Component: ComponentType<T>, userId: string) {
  return (hocProps: T) => {
    const [user, setUser] = useState<Person>(null);

    useEffect(() => {
      async function getUser() {
        const { data } = await axios.get<Person>(`/users/${userId}`);
        setUser(data);
      }
      getUser();
    }, []);
    return <Component {...hocProps} user={user} />;
  };
}

export { withUser };
