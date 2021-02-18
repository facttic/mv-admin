import * as React from "react";
import { Create, SimpleForm, TextInput, BooleanInput, PasswordInput, required } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  createForm: {
    padding: theme.spacing(2),
    margin: theme.spacing(0, 2)
  },
  createBox: {
    display:"flex", 
    justifyContent:"center"
  },
  root: {
    margin: theme.spacing(4, 6, 6, 6),
    width: "70%",
    minWidth: "200px"
  }
}))

const matchPassword = (value, allValues) => {
  if (value !== allValues.password) {
    return `Las contraseñas no coinciden`;
  }
};

const validateEmail = (value) => {
  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
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
  const classes = useStyles();

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
