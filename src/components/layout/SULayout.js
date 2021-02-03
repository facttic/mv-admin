import { Layout } from "react-admin";
import { SUAppBar } from "./SUAppBar";
import { SUSideBar } from "./SUSideBar";
import SUMenu from "./SUMenu";
//import Notification from './Notification';

// mas info en https://marmelab.com/react-admin/Theming.html#using-a-custom-layout
export const SULayout = (props) => (
  <Layout {...props} appBar={SUAppBar} sidebar={SUSideBar} menu={SUMenu} />
);
