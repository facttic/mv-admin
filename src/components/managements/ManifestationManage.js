import * as React from "react";
import { Edit, SimpleForm, TextInput, required, SaveButton, Toolbar} from 'react-admin';

const minLength = (min) => (value) => {
    if (value && value.length < min) {
      return "Debe tener mas de " + min + " caracteres";
    }
  };

  const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

export const ManifestationManage = (props) => {
  return (
    <Edit undoable={false} title="Gestionando Marcha" {...props}>
        <SimpleForm toolbar={<UserEditToolbar />}>
            <TextInput source="title" label='manifestation.management.title' validate={[required(), minLength(3)]}/>
        </SimpleForm>
    </Edit>
)};