import * as React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput, required , TextField} from 'react-admin';
import {ManifestationTextField} from "./ManifestationTextField";

const minLength = (min) => (value) => {
    if (value && value.length < min) {
      return "Debe tener mas de " + min + " caracteres";
    }
  };

export const UserEdit = (props) => (
    <Edit undoable={false} title="Editando Usuario" {...props}>
        <SimpleForm >
            <TextInput source="name" label='user.edit.name' validate={[required(), minLength(3)]}/>
            <TextInput source="email" label='user.edit.email' validate={[required()]}/>
            <div>
              <p> Marcha </p>
            </div>
            <ManifestationTextField label="user.edit.manifestation" />
            <BooleanInput source="superadmin" />
        </SimpleForm>
    </Edit>
);