import * as React from "react";
import { List, Datagrid, TextField, DeleteButton} from 'react-admin';

export const ManifestationList = props => (
    <List title="Manifestaciones" exporter={false} bulkActionButtons={false} {...props}>
        <Datagrid rowClick="edit" >
            <TextField source="name" label="Nombre"/>
            <TextField source="uri" label="URL"/>
            <TextField source="user" label="usuario"/>
            <DeleteButton/>
        </Datagrid>
    </List>
);