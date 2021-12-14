import React from "react";
import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";
import { useUser } from "./useUser";
import { useResource } from "./useResource";
import { Person } from "types/person";
import { Product } from "types/product";
import { UserInfo } from "design-patterns/container-components/UserInfo";
import { ProductInfo } from "design-patterns/container-components/ProductInfo";
import { useDataSource } from "./useDataSource";
import { Text } from "design-patterns/container-components/Usage";

function Usage() {
  const currentUser = useCurrentUser();
  const user = useUser("2");
  const userResource = useResource<Person>("/users/2");
  const productResource = useResource<Product>("/products/2");
  const userDataSource = useDataSource<Person>(getUser);
  const messageDataSource = useDataSource<string>(() =>
    getLocalStorageData("message")
  );

  async function getUser<Person>() {
    const { data } = await axios.get<Person>("/users/3");
    return data;
  }

  async function getLocalStorageData(key: string) {
    return localStorage.getItem(key);
  }

  return (
    <>
      <h3>Custom Hooks - useCurrentUser</h3>
      <UserInfo user={currentUser} />
      <h3>Custom Hooks - useUser</h3>
      <UserInfo user={user} />
      <h3>Custom Hooks - useResource</h3>
      <UserInfo user={userResource} />
      <ProductInfo product={productResource} />
      <h3>Custom Hooks - useDataSource</h3>
      <UserInfo user={userDataSource} />
      <Text message={messageDataSource} />
    </>
  );
}

export { Usage };
