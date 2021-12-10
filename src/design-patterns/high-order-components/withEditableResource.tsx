import React, { ComponentType, useEffect, useState } from "react";
import axios from "axios";

const capitalize = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Allow to edit resource info from the server and passing it to the component that we wrap it with.
function withEditableResource<T>(
  Component: ComponentType<T>,
  resourcePath: string,
  resourceName: string
) {
  const typesMethods = [
    `${resourceName}`,
    `onChange${capitalize(resourceName)}`,
    `onSave${capitalize(resourceName)}`,
    `onReset${capitalize(resourceName)}`,
  ] as const;
  // HOC should expect the same exact props T as the target component, well that's not entirely true.
  // Our HOC shouldn't expect props data, onChange, onSave and onReset because it's the higher-order component's job to inject these props in the first place.
  // Using Omit, we can tell the HOC to expect all of the props our target component expects, except for the ones it injects:
  return (hocProps: Omit<T, typeof typesMethods[number]>) => {
    // originalData: This is going to represent the data that we have on the server side. So as we make changes to the data on the client side, we'll want to have a backup copy of the server side data in case we want to reset to that original data
    const [originalData, setOriginalData] = useState<T>(null);
    const [data, setData] = useState<T>(null);

    // Load the resource information for edit
    useEffect(() => {
      async function getData() {
        const response = await axios.get<T>(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      }
      getData();
    }, []);

    // It's going to be an object containing the things that we want to change about the resource.
    function onChange(changes: Partial<T>) {
      setData({ ...data, ...changes });
    }

    async function onSave() {
      const response = await axios.post<T>(resourcePath, {
        [resourceName]: data,
      });
      setOriginalData(response.data);
      setData(response.data);
    }

    // It's going to do is reset the state of resource here to the state of our original resource when we first loaded the resource from the server.
    // This'll be used if the resource is editing something in the resource info form and they want to reset it to the way that it was before.
    function onReset() {
      setData(originalData);
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return (
      <Component
        // Since Omit creates a new type, we had to use a workaround {...(hocProps as T)} to let TypeScript know that we expect the hocProps to be almost identical to T except for the props we omitted
        {...(hocProps as T)}
        {...resourceProps}
      />
    );
  };
}

// There may be situations where we want to use the same higher order component several times over again.
// Let's say that we were building a component that needed to use both user data and product data from the server.
// Basically what we would do is wrap that twice with withEditableResource

export { withEditableResource };
