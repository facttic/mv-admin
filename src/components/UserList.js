import * as React from "react";
import { List, Datagrid, TextField, EmailField, BooleanField, DeleteButton} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <EmailField source="email" />
            <BooleanField source="superadmin" />
            <DeleteButton/>
        </Datagrid>
    </List>
);