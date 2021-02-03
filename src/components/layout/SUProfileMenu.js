import * as React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";
// mas info en https://marmelab.com/react-admin/Theming.html#usermenu-customization
//ejemplo de extension de funcionalidades
const ConfigurationMenu = React.forwardRef(({ onClick }, ref) => (
  <MenuItemLink
    ref={ref}
    to="/configuration"
    primaryText="Configuration"
    leftIcon={<SettingsIcon />}
    onClick={onClick} // close the menu on click
  />
));
//agrega la extension a user menu, esto se ve reflejado en el "avatar".
export const SUProfileMenu = (props) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
  </UserMenu>
);
