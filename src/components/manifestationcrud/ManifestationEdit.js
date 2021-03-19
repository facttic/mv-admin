import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  useGetList,
  Loading,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";
import { useState } from "react";
import { FormStyles } from "../FormStyles"

const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};

const validateUri = (value) => {
  let reg = /^(?!:\/\/)([a-zA-Z0-9]+\.)?([a-zA-Z0-9][a-zA-Z0-9-]+\.){2,6}?[a-zA-Z]{2,6}?$/i
  if (reg.test(value) === false && !value.includes("localhost")) {
    return "La uri no debe tener protocolo ni / al final, ejemplo 'sub.dominio.com'";
  }
}

export const ManifestationEdit = (props) => {
  const classes = FormStyles();

  let [Users, UsersSelected, usersSelectedList] = useState("");
  UsersSelected = useGetList(
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

  if (UsersSelected.loading || Users.loading) {
    return <Loading />;
  }

  if (UsersSelected.error || Users.error) {
    return <p>ERROR</p>;
  }
  usersSelectedList = Object.keys(UsersSelected.data).map((key) => {
    return UsersSelected.data[key].id;
  });

  return (
    <div className={classes.createBox}>
      <Edit undoable={false} title="manifestation.create.title" {...props} classes={classes}>
        <SimpleForm className={classes.createForm}>
          <TextInput
            source="name"
            label="manifestation.create.name"
            variant="standard"
            validate={[required(), minLength(3)]}
            fullWidth
          />
          <TextInput
            source="uri"
            label="manifestation.create.uri"
            variant="standard"
            validate={[required(), validateUri]}
            fullWidth
          />
          <ReferenceArrayInput
            source="userIds"
            reference="users"
            variant="standard"
            filter={{ superadmin: false }}
            fullWidth
          >
            <SelectArrayInput initialValue={usersSelectedList} label="manifestation.create.user" optionText="name" />
          </ReferenceArrayInput>
        </SimpleForm>
      </Edit>
    </div>
  );
};
