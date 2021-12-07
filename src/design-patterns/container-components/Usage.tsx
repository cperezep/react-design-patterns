import React from "react";
import axios from "axios";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

type TextProps = {
  message?: string;
};

function Text({ message }: TextProps) {
  return <h1>{message}</h1>;
}

function Usage() {
  async function getUser<Person>() {
    const { data } = await axios.get<Person>("/users/3");
    return data;
  }

  async function getLocalStorageData(key: string) {
    return localStorage.getItem(key);
  }

  return (
    <>
      {/* Load current user from server */}
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      {/* - Generic user loader that allows to load different users instead of just the current user from server. */}
      <UserLoader userId="1">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="3">
        <UserInfo />
      </UserLoader>
      {/* Instead of having a container component that loads a specific type of resource, we're going to have a generic component that allows us to load any type of resource from the server */}
      <ResourceLoader resourceUrl="/users/2" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/2" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
      {/*  Basically a container component, just like ResourceLoader. Except instead of starting off with the idea that we're going to be loading some resource from a URL on the server, this data source component, isn't going to know exactly where its data is coming from */}
      <DataSource getData={getUser} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getData={() => getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export { Usage };
