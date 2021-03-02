import * as React from "react";
import { List, Datagrid, TextField, BooleanField, DeleteButton, useListContext } from "react-admin";
import { ManifestationTextField } from "./ManifestationTextField";

import { makeStyles } from "@material-ui/core/styles";

import ListActions from '../crudComponents/ListActions'


const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    padding: theme.spacing(1, 2)
  },
  list: {
    margin: theme.spacing(0, 6),
  },
  headerCell: {
    backgroundColor: theme.palette.secondary.light,
    fontWeight: "bold"
  },
  main: {
    paddingTop: theme.spacing(4)
  }
}))



export const UserList = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list} classes={classes} undoable={false} actions={<ListActions title="Usuarios" />} title="Usuarios" exporter={false} bulkActionButtons={false} {...props}>
      <Datagrid classes={classes} rowClick="edit">
        <TextField source="name" label="user.list.name" />
        <TextField source="email" label="user.list.email" />
        <ManifestationTextField label="user.list.manifestation" />
        <BooleanField source="superadmin" />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  )
}
  ;
