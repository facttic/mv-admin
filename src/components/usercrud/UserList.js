import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DeleteButton,
} from "react-admin";
import { ManifestationTextField } from "./ManifestationTextField";

export const UserList = (props) => (
  <List undoable={false} title="Usuarios" exporter={false} bulkActionButtons={false} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="user.list.name" />
      <TextField source="email" label="user.list.email" />
      <ManifestationTextField label="user.list.manifestation" />
      <BooleanField source="superadmin" />
      <DeleteButton undoable={false} />
    </Datagrid>
  </List>
);
