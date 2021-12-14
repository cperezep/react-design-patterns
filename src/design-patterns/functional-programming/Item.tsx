import React, { useState } from "react";
import { Tree } from "types/tree";

type TreeItemProps = {
  id: string;
  label: string;
  branches: Array<Tree>;
};

function Item({ id, label, branches }: TreeItemProps): JSX.Element {
  const [open, toggle] = useState<boolean>(false);

  return (
    <div>
      <h5>
        {label}
        <button style={{ marginLeft: "10px" }} onClick={() => toggle(!open)}>
          Open
        </button>
      </h5>
      <ul>
        {/* Loop children and run recursive */}
        {open &&
          branches.map((branch: Tree) => (
            <li key={branch.id}>
              <div>Child: {branch.label}</div>
              <Item
                id={branch.id}
                label={branch.label}
                branches={branch.branches}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Item };
