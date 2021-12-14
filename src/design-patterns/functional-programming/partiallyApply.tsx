import React, { ComponentType } from "react";

function partiallyApply<T>(
  Component: ComponentType<T>,
  partialProps: Partial<T>
) {
  return (props: T) => {
    return <Component {...partialProps} {...props} />;
  };
}

export { partiallyApply };
