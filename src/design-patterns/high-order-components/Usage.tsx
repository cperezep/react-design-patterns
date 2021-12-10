import React from "react";
import { currentUser } from "mocks/handlers";
import { UserInfo } from "design-patterns/container-components/UserInfo";
import { printProps } from "./printProps";
import { withUser } from "./withUser";
import { UserForm } from "./UserInfoForm";
import { ProductForm } from "./ProductForm";
import { withEditableUser } from "./withEditableUser";
import { withEditableResource } from "./withEditableResource";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "3");
const UserFormHoc = withEditableUser(UserForm, "2");
const ResourceUserFormHoc = withEditableResource(UserForm, "/users/2", "user");
const ResourceProductFormHoc = withEditableResource(
  ProductForm,
  "/products/2",
  "product"
);

function Usage() {
  return (
    <>
      <h3>HOC - printProps</h3>
      <UserInfoWrapped user={currentUser} />
      <h3>HOC - withUser</h3>
      <p>Load user info from the server</p>
      <UserInfoWithLoader />
      <h3>HOC - withEditableUser</h3>
      <p>HOC that allows to edit serve data</p>
      <UserFormHoc />
      <h3>HOC - withEditableResource</h3>
      <p>
        HOC that allows to edit a specific type of resource, we're going to have
        a generic component that allows us to edit any type of resource from the
        server
      </p>
      <h4>User Form</h4>
      <ResourceUserFormHoc />
      <h4>Product Form</h4>
      <ResourceProductFormHoc />
    </>
  );
}

export { Usage };
