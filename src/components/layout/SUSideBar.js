import { Sidebar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import PeopleIcon from '@material-ui/icons/People';
import Typography from "@material-ui/core/Typography";
import { theme } from "../theme";
import Box from "@material-ui/core/Box"


//mas info en https://marmelab.com/react-admin/Theming.html#sidebar-customization
const useSidebarStyles = makeStyles({
    sidebar: {
        backgroundColor: 'white',
        padding: "25px",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'white',
        padding: theme.spacing(4, 2, 4, 2),
        borderTopRightRadius: theme.spacing(5)
    },
    menu: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        borderRadius: '48px'
    },
      headerText:{
        paddingLeft: "8px"
      },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
      },
});

export const SUSideBar = props => {
const classes = useSidebarStyles(props);
return (
    <div className={classes.menu}>
        <div className={classes.header}>
            <Avatar className={classes.avatar}>
                <PeopleIcon />
            </Avatar>
            <div className={classes.headerText}>
            <Typography variant="h6">
                <Box fontWeight="fontWeightBold"> 
                Marchas Virtuales 
                </Box>
            </Typography>
            <Typography component="h2" variant="subtitle1">
                    Admin
            </Typography>
            </div>
        </div>
    <Sidebar className={classes.sidebar} {...props}>
        
    </Sidebar>
    </div>
);
};