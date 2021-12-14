import React from "react";
import { Item } from "./Item";
import { mockOrgTreeList } from "mocks/treelist";
import { Tree } from "types/tree";
import { BigSuccessButton, Button, DangerButton } from "./Composition";
import { partiallyApply } from "./partiallyApply";

const items = mockOrgTreeList;
const DangerButtonComposition = partiallyApply(Button, { color: "red" });
const BigSuccessButtonComposition = partiallyApply(Button, {
  color: "green",
  size: "large",
});

function Usage() {
  return (
    <>
      <h3>FP - Recursive Components</h3>
      <div>
        {/* Start by iterating over all items */}
        {items.map((item: Tree) => (
          <Item
            key={item.id}
            id={item.id}
            label={item.label}
            branches={item.branches}
          />
        ))}
      </div>
      <h3>FP - Composition</h3>
      <DangerButton text="Don't do it!" />
      <BigSuccessButton text="Yes!!!" />
      <h3>FP - Partially Applied Components</h3>
      <DangerButtonComposition text="Don't do it!" />
      <BigSuccessButtonComposition text="Yes!!!" />
    </>
  );
}

export { Usage };
