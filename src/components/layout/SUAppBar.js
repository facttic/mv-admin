import * as React from "react";
import { AppBar } from "react-admin";
import {SUProfileMenu} from './SUProfileMenu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//mas info en https://marmelab.com/react-admin/Theming.html#customizing-the-appbar-content
const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});


export const SUAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar userMenu={SUProfileMenu(props)} {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <span className={classes.spacer} />
        </AppBar>
    );
};
