import { useState, useEffect } from "react";
import axios from "axios";
import { Person } from "types/person";

function useCurrentUser() {
  const [user, setUser] = useState<Person>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Person>("/current-user");
      setUser(data);
    })();
  }, []);

  return user;
}

export { useCurrentUser };
