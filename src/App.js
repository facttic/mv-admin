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
import { ManifestationManage } from "./components/managements/ManifestationManage";
import { ManifestationManageList } from "./components/managements/ManifestationManageList";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";
import localeProvider from "./providers/localeProvider";
import { theme } from "./components/theme";

const App = () => (
  <Admin theme={theme}
    i18nProvider={localeProvider}
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={LoginPage}
    layout={(props) => <SULayout {...props} theme={theme} />}
  >
    {(permissions) => [
      permissions === "admin" ? (
        <Resource
          name="users"
          options={{ label: "Usuarios" }}
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
          icon={UserIcon}
        />
      ) : null,
      permissions === "admin" ? (
        <Resource
          name="manifestations"
          options={{ label: "Marchas" }}
          list={ManifestationList}
          create={ManifestationCreate}
          edit={ManifestationEdit}
          icon={GroupWorkIcon}
        />
      ) : null,
      permissions === "user" ? (
        <Resource
          name="manifestations"
          options={{ label: "Marcha" }}
          list={ManifestationManageList}
          edit={ManifestationManage}
          icon={GroupWorkIcon}
        />
      ) : null
    ]}
  </Admin>
);

export default App;
