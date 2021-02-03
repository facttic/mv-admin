import * as React from "react";
import { List, Datagrid, TextField, BooleanField, DeleteButton} from 'react-admin';

export const UserList = props => (
    <List title="Usuarios" exporter={false} bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit" >
            <TextField source="name" label="Nombre"/>
            <TextField source="email" label="E-mail"/>
            <BooleanField source="superadmin" />
            <DeleteButton/>
        </Datagrid>
    </List>
);