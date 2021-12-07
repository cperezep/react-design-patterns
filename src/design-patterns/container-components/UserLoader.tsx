import React, { useEffect, useState } from "react";
import axios from "axios";
import { Person } from "../../types/person";

type UserLoaderProps = {
  children: React.ReactNode;
  userId: string;
};

/* - Generic user loader that allows to load different users instead of just the current user from server. */
function UserLoader({ children, userId }: UserLoaderProps) {
  const [user, setUser] = useState<Person | undefined>(undefined);

  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get<Person>(`/users/${userId}`);
      setUser(data);
    }
    getUser();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
}

export { UserLoader };
