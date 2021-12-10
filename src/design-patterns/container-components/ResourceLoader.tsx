import React, { useEffect, useState } from "react";
import axios from "axios";

type ResourceLoaderProps = {
  children: React.ReactNode;
  resourceName: string;
  resourceUrl: string;
};

function ResourceLoader<T>({
  children,
  resourceName,
  resourceUrl,
}: ResourceLoaderProps) {
  const [data, setData] = useState<T>(null);

  useEffect(() => {
    async function getResource() {
      const { data } = await axios.get<T>(resourceUrl);
      setData(data);
    }
    getResource();
  }, [resourceUrl]);

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

export { ResourceLoader };
