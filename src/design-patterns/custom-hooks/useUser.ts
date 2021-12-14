import { useState, useEffect } from "react";
import axios from "axios";
import { Person } from "types/person";

function useUser(userId: string) {
  const [user, setUser] = useState<Person>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Person>(`/users/${userId}`);
      setUser(data);
    })();
  }, [userId]);

  return user;
}

export { useUser };
