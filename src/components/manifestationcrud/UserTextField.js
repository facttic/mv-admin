import * as React from "react";
import {
  useGetList,
} from "react-admin";

export const UserTextField = (props) => {
    const User = useGetList(
        "users",
        { page: 1, perPage: 999 },
        { field: "name", order: "ASC" },
        { manifestation_id: props.record.id}
    );
    const manifestationUserList = Object.keys(User.data).map((key) => {
        return User.data[key];
      });
    const manifestationUser =
        manifestationUserList[0] === undefined ? "- - -" : manifestationUserList[0].name;
    if(User.loading){
        return(
            <b>Cargando...</b>
        );
    }
    return(
        <b>{manifestationUser}</b>
    );
};