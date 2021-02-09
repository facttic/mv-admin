import * as React from "react";
import { useGetList } from "react-admin";

export const UserTextField = (props) => {
  const User = useGetList(
    "users",
    { page: 1, perPage: 999 },
    { field: "name", order: "ASC" },
    { manifestation_id: props.record === undefined ? "":props.record.id }
  );
  const manifestationUserList = Object.keys(User.data).map((key) => {
    return User.data[key].name;
  });
  let users = manifestationUserList.length === 0? "- - -":"";
  for (let i in manifestationUserList) {
    users = users + manifestationUserList[i];
    if (manifestationUserList.length - 1 > i) {
      users = users + ", ";
    }
  }
  if (User.error) {
    return <b>- - -</b>;
  }
  if (User.loading) {
    return <b>Cargando...</b>;
  }
  return <b>{users}</b>;
};
