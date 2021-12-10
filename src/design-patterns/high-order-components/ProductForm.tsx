import React from "react";
import { Product } from "types/product";

type UserFormProps = {
  product: Product;
  onChangeProduct: (changes: Partial<Product>) => void;
  onSaveProduct: () => Promise<void>;
  onResetProduct: () => void;
};

function ProductForm({
  product,
  onChangeProduct,
  onSaveProduct,
  onResetProduct,
}: UserFormProps) {
  return product ? (
    <>
      <label>
        Name:
        <input
          value={product.name}
          onChange={(e) => onChangeProduct({ name: e.target.value })}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={product.rating}
          onChange={(e) => onChangeProduct({ rating: Number(e.target.value) })}
        />
      </label>
      <label>
        Description:
        <input
          value={product.description}
          onChange={(e) => onChangeProduct({ description: e.target.value })}
        />
      </label>
      <button onClick={onResetProduct}>Reset</button>
      <button onClick={onSaveProduct}>Save Changes</button>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export { ProductForm };
