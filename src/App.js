import * as React from "react";
import { Admin, Resource } from "react-admin";
import UserIcon from "@material-ui/icons/People";

import { UserList } from "./components/usercrud/UserList";
import { UserCreate } from "./components/usercrud/UserCreate";
import { UserEdit } from "./components/usercrud/UserEdit";
import { LoginPage } from "./components/LoginPage";
import { SULayout } from "./components/layout/SULayout";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={LoginPage}
    layout={SULayout}
  >
    <Resource
      name="users"
      options={{ label: "Usuarios" }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      icon={UserIcon}
    />
  </Admin>
);

export default App;
