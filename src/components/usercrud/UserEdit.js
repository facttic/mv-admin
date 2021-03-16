import * as React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput, required } from 'react-admin';
import { ManifestationTextField } from "./ManifestationTextField";
import { FormStyles } from "../FormStyles"


const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};

export const UserEdit = (props) => {
  const classes = FormStyles();

  return (
    <div className={classes.createBox}>
      <Edit undoable={false} title="Editando Usuario" {...props} classes={classes}>
        <SimpleForm className={classes.createForm}>
          <TextInput
            source="name"
            label='user.edit.name'
            variant="standard"
            validate={[required(), minLength(3)]} />
          <TextInput
            source="email"
            label='user.edit.email'
            variant="standard"
            validate={[required()]} />
          <div>
            <p> Marcha </p>
          </div>
          <ManifestationTextField label="user.edit.manifestation" />
          <BooleanInput className={classes.boolean} source="superadmin" />
        </SimpleForm>
      </Edit>
    </div>
  )
};