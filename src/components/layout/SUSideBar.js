import { Sidebar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import PeopleIcon from '@material-ui/icons/People';
import Typography from "@material-ui/core/Typography";
import { theme } from "../theme";


//mas info en https://marmelab.com/react-admin/Theming.html#sidebar-customization
const useSidebarStyles = makeStyles({
    sidebar: {
        backgroundColor: 'white',
        borderRadius: '48px',
        padding: "25px",
    },
    header: {
        display: "flex",
        flexDirection: "row"
    },
    title: {
        fontWeight: "bold"
      },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
      },
});

export const SUSideBar = props => {
const classes = useSidebarStyles(props);
return (
    <Sidebar className={classes.sidebar} {...props}>
        <div className={classes.header}>
            <Avatar className={classes.avatar}>
                <PeopleIcon />
            </Avatar>
            <div>
            <Typography className={classes.title} component="h1" variant="h6">
                Marchas Virtuales
            </Typography>
            <Typography component="h2" variant="subtitle1">
                    Admin
            </Typography>
            </div>
        </div>
    </Sidebar>
);
};