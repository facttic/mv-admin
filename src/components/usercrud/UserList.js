import * as React from "react";
import { List, Datagrid, TextField, BooleanField, DeleteButton, useListContext } from "react-admin";
import { Link } from 'react-router-dom';
import { ManifestationTextField } from "./ManifestationTextField";
import { TopToolbar, sanitizeListRestProps } from 'react-admin';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../theme";

const useStyles = makeStyles(() => ({
  fab: {
    backgroundColor: theme.palette.primary.main,
  },
}))

const ListActions = (props) => {
  const classes = useStyles();
  const {
    className,
    exporter,
    filters,
    maxResults,
    ...rest
  } = props;
  const {
    basePath,
  } = useListContext();

  return (
    <TopToolbar className={classes.toolbar} {...sanitizeListRestProps(rest)}>

      <Link to={`${basePath}/create`} >
        <Fab className={classes.fab} aria-label="add"
          // onClick={() => { alert('Your custom action'); }}
          label="+"
        >
          <AddIcon />

        </Fab>
      </Link>
    </TopToolbar>
  );
};

export const UserList = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list} undoable={false} actions={<ListActions />} title="Usuarios" exporter={false} bulkActionButtons={false} {...props}>
      <Datagrid rowClick="edit">
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
