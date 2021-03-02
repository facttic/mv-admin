import * as React from "react";
import { List, Datagrid, TextField, DeleteButton, useListContext  } from "react-admin";
import { UserTextField } from "./UserTextField";
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


export const ManifestationList = (props) => {
  const classes = useStyles();
  return (
    <List
      className={classes.list} 
      classes={classes} 
      undoable={false} 
      actions={<ListActions title="Marchas" />}
      title="Manifestaciones"
      exporter={false}
      bulkActionButtons={false}
      {...props}>
      <Datagrid rowClick="edit">
        <TextField source="name" label="Nombre" />
        <TextField source="uri" label="URL" />
        <UserTextField label="Admin" id={props.id}/>
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
