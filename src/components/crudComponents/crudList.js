import React from 'react';
import { List, Datagrid, TextField, BooleanField, DeleteButton} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

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

const CrudList = (props) => {
    const classes = useStyles();
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
      } = props;

    return (
        <List className={classes.list} classes={classes} undoable={false} actions={props.actions} title={props.title} exporter={false} bulkActionButtons={false} {...props}>
            <Datagrid classes={classes} rowClick={props.rowClick}>
                <TextField source={props.firstcolumnsource} label={props.firstcolumnlabel} />
                <TextField source={props.secondcolumnsource} label={props.secondcolumnlabel} />
                {props.datatextfield}
                {props.booleanfield  ? <BooleanField source="superadmin" /> : ""}
                
                <DeleteButton undoable={false} />
            </Datagrid>
        </List>
    );
};

export default CrudList;