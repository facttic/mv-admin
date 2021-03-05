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
import { FormStyles } from "../FormStyles"

const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};



export const ManifestationCreate = (props) => {
  const classes = FormStyles();

  const { data, loading, error } = useGetList(
    "users",
    { page: 1, perPage: 999 },
    { field: "name", order: "ASC" },
    { superadmin:false}
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
    <div className={classes.createBox}>
      <Create title="manifestation.create.title" {...props} classes={classes}>
        <SimpleForm className={classes.createForm}>
          <TextInput
            fullWidth 
            source="name"
            label="manifestation.create.name"
            validate={[required(), minLength(3)]}
          />
          <TextInput
            fullWidth 
            source="uri"
            label="manifestation.create.uri"
            validate={[required()]}
          />
          <SelectArrayInput fullWidth  source="user" label="manifestation.create.user" optionText="name" choices={arrayData} validate={[required()]}/>
        </SimpleForm>
      </Create>
    </div>
  );
};
