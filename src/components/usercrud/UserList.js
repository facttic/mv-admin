import * as React from "react";
import { List, Datagrid, TextField, BooleanField, DeleteButton, useListContext } from "react-admin";
import { Link } from 'react-router-dom';
import { ManifestationTextField } from "./ManifestationTextField";
import { TopToolbar, sanitizeListRestProps } from 'react-admin';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


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
      <div className={classes.title}>
      <Typography variant="h6"> Usuarios </Typography>
      </div>
      <div>
      <Link to={`${basePath}/create`} className={classes.fabs} >
        <Fab className={classes.fab} aria-label="add" size="medium"
          // onClick={() => { alert('Your custom action'); }}
          label="+">
          <AddIcon />
        </Fab>
      </Link>
      </div>
    </TopToolbar>
  );
};

export const UserList = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list} classes={classes} undoable={false} actions={<ListActions />} title="Usuarios" exporter={false} bulkActionButtons={false} {...props}>
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
