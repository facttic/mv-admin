import * as React from "react";
import { ManifestationTextField } from "./ManifestationTextField";


import ListActions from '../crudComponents/ListActions'
import CrudList from '../crudComponents/crudList'


export const UserList = (props) => {
  return (
    <CrudList 
      actions={<ListActions title="Usuarios"/>}
      rowClick = "edit"
      firstcolumnsource = "name"
      firstcolumnlabel = "user.list.name"
      secondcolumnsource = "email"
      secondcolumnlabel = "user.list.email"
      datatextfield = {<ManifestationTextField label="user.list.manifestation" />}
      booleanfield = {true}
      {...props}
      >
    </CrudList>
  )
}
  ;
