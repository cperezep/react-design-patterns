import React from "react";

type RegularListProps<T> = {
  items: Array<T>;
  resourceName: string;
  itemComponent: React.ElementType;
};

function RegularList<T>({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: RegularListProps<T>) {
  return (
    <>
      {items.map((item, i) => (
        // Example
        // <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
        // <ItemComponent key={i} person={item} />
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

export { RegularList };
