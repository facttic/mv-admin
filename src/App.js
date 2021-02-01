import * as React from "react";
import { Admin, Resource  } from "react-admin";

import { UserList } from "./components/UserList";
import { LoginPage } from "./components/LoginPage";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";


const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
