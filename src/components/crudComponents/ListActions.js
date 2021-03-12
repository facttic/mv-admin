import React from 'react';

import { Link } from 'react-router-dom';
import { TopToolbar, sanitizeListRestProps , useListContext} from 'react-admin';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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
      <Typography variant="h6"> {props.title} </Typography>
      </div>
      <div>
      <Link to={`${basePath}/create`} className={classes.fabs} >
        <Fab color="primary" aria-label="add" size="medium"
          label="+">
          <AddIcon />
        </Fab>
      </Link>
      </div>
    </TopToolbar>
  );
};

export default ListActions;