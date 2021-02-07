import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  useGetList,
  Loading,
  SelectInput,
} from "react-admin";
import { useState } from "react";

const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};

export const ManifestationEdit = (props) => {
  let [Users, User, listUsers, manifestationUser] = useState("");
  User = useGetList(
    "users",
    { page: 1, perPage: 999 },
    { field: "name", order: "ASC" },
    { manifestation_id: props.id, superadmin: false }
  );
  Users = useGetList(
    "users",
    { page: 1, perPage: 999 },
    { field: "name", order: "ASC" },
    { superadmin: false }
  );

  if (User.loading || Users.loading) {
    console.log("loadings", User.loading, Users.loading);
    return <Loading />;
  }

  if (User.error || Users.error) {
    return <p>ERROR</p>;
  }
  listUsers = Object.keys(Users.data).map((key) => {
    return Users.data[key];
  });
  const manifestationUserList = Object.keys(User.data).map((key) => {
    return Users.data[key];
  });
  manifestationUser =
    manifestationUserList[0] === undefined ? "" : manifestationUserList[0].id;
  console.log(User);

  return (
    <Edit title="manifestation.create.title" {...props}>
      <SimpleForm>
        <TextInput
          source="name"
          label="manifestation.create.name"
          validate={[required(), minLength(3)]}
        />
        <TextInput
          source="uri"
          label="manifestation.create.uri"
          validate={[required()]}
        />
        <SelectInput
          initialValue={manifestationUser}
          source="user_id"
          label="manifestation.create.user"
          optionText="name"
          choices={listUsers}
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
};
