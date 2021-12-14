import { useState, useEffect } from "react";
import axios from "axios";

function useResource<T>(resourceUrl: string) {
  const [resource, setResource] = useState<T>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<T>(resourceUrl);
      setResource(data);
    })();
  }, [resourceUrl]);

  return resource;
}

export { useResource };
