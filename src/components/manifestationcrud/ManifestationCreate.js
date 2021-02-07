import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  useGetList,
  Loading,
  SelectInput,
} from "react-admin";

const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};

export const ManifestationCreate = (props) => {
  const { data, loading, error } = useGetList(
    "users",
    { page: 1, perPage: 999 },
    { field: "name", order: "ASC" },
    { manifestation_id: null , superadmin:false}
  );
  const arrayData = Object.keys(data).map((key) => {
    return data[key];
  });
  console.log(arrayData);
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
          validate={[required()]}
        />
        <SelectInput source="user" label="manifestation.create.user" optionText="name" choices={arrayData} validate={[required()]}/>
      </SimpleForm>
    </Create>
  );
};
