import * as React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput, required } from 'react-admin';

const minLength = (min) => (value) => {
    if (value && value.length < min) {
      return "Debe tener mas de " + min + " caracteres";
    }
  };

export const UserEdit = (props) => (
    <Edit title="Editando Usuario" {...props}>
        <SimpleForm >
            <TextInput source="name" validate={[required(), minLength(3)]}/>
            <TextInput source="email"  validate={[required()]}/>
            <BooleanInput source="superadmin" />
        </SimpleForm>
    </Edit>
);