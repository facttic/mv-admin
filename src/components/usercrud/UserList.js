import * as React from "react";
import { List, Datagrid, TextField, BooleanField, DeleteButton} from 'react-admin';

export const UserList = props => (
    <List title="Usuarios"  {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="email" />
            <BooleanField source="superadmin" />
            <DeleteButton/>
        </Datagrid>
    </List>
);