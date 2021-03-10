import * as React from "react";
import { Create, SimpleForm, TextInput, BooleanInput, PasswordInput, required } from "react-admin";
import { FormStyles } from "../FormStyles"


const matchPassword = (value, allValues) => {
  if (value !== allValues.password) {
    return `Las contraseñas no coinciden`;
  }
};

const validateEmail = (value) => {
  let reg =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(value) === false) {
    return "Email incorrecto";
  }
};

const minLength = (min) => (value) => {
  if (value && value.length < min) {
    return "Debe tener mas de " + min + " caracteres";
  }
};

export const UserCreate = (props) => {
  const classes = FormStyles();

return ( 
  <div className={classes.createBox}>
  <Create title="Creando Usuario" {...props} classes={classes}>
    <SimpleForm className={classes.createForm}>
      <TextInput
        source="name"
        label='user.create.name'
        variant="standard"
        fullWidth
        validate={[required(), minLength(3)]}
      />
      <TextInput label='user.create.email' fullWidth source="email" variant="standard" validate={[required(), validateEmail]} />
      <PasswordInput
        source="password"
        label="user.create.password"
        variant="standard"
        fullWidth
        validate={[required(), minLength(7)]}
      />
      <PasswordInput
        source="cpassword"
        label="user.create.confirm"
        variant="standard"
        fullWidth
        validate={[required(), matchPassword]}
      />
      <BooleanInput source="superadmin" />
    </SimpleForm>
  </Create>
  </div>
)};
