import * as React from "react";
import { Edit, SimpleForm, TextInput, BooleanInput, required } from 'react-admin';

export const UserEdit = (props) => (
    <Edit title="Editando Usuario" {...props}>
        <SimpleForm >
            <TextInput source="name" validate={[required()]}/>
            <TextInput source="email"  validate={[required()]}/>
            <BooleanInput source="superadmin" />
        </SimpleForm>
    </Edit>
);