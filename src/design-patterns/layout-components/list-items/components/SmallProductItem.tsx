import React from "react";
import type { Product } from "../Usage";

type SmallProductItemProps = {
  product: Product;
};

function SmallProductItem({ product }: SmallProductItemProps) {
  const { name, price } = product;

  return (
    <h3>
      {name} - {price}
    </h3>
  );
}

export { SmallProductItem };
