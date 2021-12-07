import React, { useEffect, useState } from "react";

type DataSourceProps = {
  children: React.ReactNode;
  getData: () => Promise<unknown>;
  resourceName: string;
};

function DataSource({ children, getData, resourceName }: DataSourceProps) {
  const [data, setData] = useState<unknown | undefined>(undefined);

  useEffect(() => {
    async function getResource() {
      const data = await getData();
      setData(data);
    }
    getResource();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: data });
        }
        return child;
      })}
    </>
  );
}

export { DataSource };
