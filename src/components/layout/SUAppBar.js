import * as React from "react";
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
       // <AppBar userMenu={SUProfileMenu(props)} {...props}>
       <div>
            <span className={classes.spacer} />
        </div>
    );
};
