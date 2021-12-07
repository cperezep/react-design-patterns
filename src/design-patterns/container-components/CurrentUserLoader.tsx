import React, { useEffect, useState } from "react";
import axios from "axios";
import { Person } from "../../types/person";

type CurrentUserLoaderProps = {
  children: React.ReactNode;
};

function CurrentUserLoader({ children }: CurrentUserLoaderProps) {
  const [user, setUser] = useState<Person | undefined>(undefined);

  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get<Person>("/current-user");
      setUser(data);
    }
    getUser();
  }, []);

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

export { CurrentUserLoader };
