import * as React from "react";
import { List, Datagrid, TextField, DeleteButton } from "react-admin";
import { UserTextField } from "./UserTextField";

export const ManifestationList = (props) => {
  return (
    <List
      title="Manifestaciones"
      exporter={false}
      bulkActionButtons={false}
      {...props}>
      <Datagrid rowClick="edit">
        <TextField source="name" label="Nombre" />
        <TextField source="uri" label="URL" />
        <UserTextField label="Admin" id={props.id}/>
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};
