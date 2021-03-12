import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  useGetList,
  Loading,
  SelectArrayInput,
} from "react-admin";
import { FormStyles } from "../FormStyles";

const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};

const validateUri = (value) => {
  console.log("Value", value);
  let reg = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i;
  if (reg.test(value) === false && !value.includes("localhost")) {
    return "La uri no debe tener protocolo ni / al final, ejemplo 'sub.dominio.com'";
  }
};

export const ManifestationCreate = (props) => {
  const classes = FormStyles();

  const { data, loading, error } = useGetList(
    "users",
    { page: 1, perPage: 999 },
    { field: "name", order: "ASC" },
    { superadmin: false }
  );
  const arrayData = Object.keys(data).map((key) => {
    return data[key];
  });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR</p>;
  }
  return (
    <Create title="manifestation.create.title" {...props}>
      <SimpleForm>
        <TextInput
          source="name"
          label="manifestation.create.name"
          validate={[required(), minLength(3)]}
        />
        <TextInput
          source="uri"
          label="manifestation.create.uri"
          validate={[required(), validateUri]}
        />
        <SelectArrayInput
          source="userIds"
          label="manifestation.create.user"
          optionText="name"
          choices={arrayData}
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
