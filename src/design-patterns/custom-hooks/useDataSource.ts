import { useState, useEffect, useCallback } from "react";

function useDataSource<T>(getData: () => Promise<T>) {
  const [data, setData] = useState<T>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataCallback = useCallback(() => getData(), []);

  useEffect(() => {
    async function getResource() {
      const data = await getDataCallback();
      setData(data);
    }
    getResource();
  }, [getDataCallback]);

  return data;
}

export { useDataSource };
