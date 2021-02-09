import { Sidebar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

//mas info en https://marmelab.com/react-admin/Theming.html#sidebar-customization
const useSidebarStyles = makeStyles({
    drawerPaper: {
        backgroundColor: 'white',
    },
});

export const SUSideBar = props => {
    const classes = useSidebarStyles();
    return (
        <Sidebar classes={classes} {...props} />
    );
};