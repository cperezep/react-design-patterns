import React, { ComponentType } from "react";

/*
    ComponentType is a special type React provides for working with components in TypeScript.
    We used the T type in several places:
        * We’re setting our parameter type to ComponentType<T>. Now, within the scope of this function, T denotes the props type of the target component.
        * We’re also setting the hocProps type to T to enforce that our HOC component receives the same props as the target.
    Thanks to generics, TypeScript can dynamically calculate all of the props our original component accepts and enforce the same restriction for the HOC.
*/
function printProps<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    console.log(hocProps);
    return <Component {...hocProps} />;
  };
}

export { printProps };
