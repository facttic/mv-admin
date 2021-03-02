import * as React from "react";
import { UserTextField } from "./UserTextField";

import ListActions from '../crudComponents/ListActions'
import CrudList from '../crudComponents/crudList'


export const ManifestationList = (props) => {
  return (
    <CrudList 
      actions={<ListActions title="Marchas"/>}
      rowClick = "edit"
      firstcolumnsource = "name"
      firstcolumnlabel = "Nombre"
      secondcolumnsource = "uri"
      secondcolumnlabel = "URL"
      datatextfield = {<UserTextField label="admin" id={props.id}/>}
      booleanfield = {false}
      {...props}>
    </CrudList>
  );
};
