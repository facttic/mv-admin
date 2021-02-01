import * as React from "react";
import { Create, SimpleForm, TextInput, BooleanInput, PasswordInput,required } from 'react-admin';

export const UserCreate = (props) => (
    <Create  title="Creando Usuario" {...props}>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}/>
            <TextInput source="email" validate={[required()]} />
            <PasswordInput source="password" validate={[required()]}/>
            <BooleanInput source="superadmin" />
        </SimpleForm>
    </Create>
);