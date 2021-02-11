import { Layout } from "react-admin";
import { SUAppBar } from "./SUAppBar";
import { SUSideBar } from "./SUSideBar";
import SUMenu from "./SUMenu";
import { makeStyles } from '@material-ui/core/styles';
import { theme } from "../theme";


//import Notification from './Notification';

const layoutStyles = makeStyles({
  layout: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: '0px'
  }});

// mas info en https://marmelab.com/react-admin/Theming.html#using-a-custom-layout
export const SULayout = props => {
const classes = layoutStyles();
  return (
    <Layout className={classes.layout} {...props} appBar={SUAppBar} sidebar={SUSideBar} menu={SUMenu} />
  );
};
