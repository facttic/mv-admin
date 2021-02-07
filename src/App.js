import * as React from "react";
import { Admin, Resource } from "react-admin";
import UserIcon from "@material-ui/icons/People";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

import { UserList } from "./components/usercrud/UserList";
import { UserCreate } from "./components/usercrud/UserCreate";
import { UserEdit } from "./components/usercrud/UserEdit";
import { LoginPage } from "./components/LoginPage";
import { SULayout } from "./components/layout/SULayout";
import { ManifestationList } from "./components/manifestationcrud/ManifestationList";
import { ManifestationCreate } from "./components/manifestationcrud/ManifestationCreate";
import { ManifestationEdit } from "./components/manifestationcrud/ManifestationEdit";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";
import localeProvider from "./providers/localeProvider";

const App = () => (
  <Admin
    i18nProvider={localeProvider}
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

    <Resource
      name="manifestations"
      options={{ label: "Marchas" }}
      list={ManifestationList}
      create={ManifestationCreate}
      edit={ManifestationEdit}
      icon={GroupWorkIcon}
    />
  </Admin>
);

export default App;
