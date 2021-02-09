import * as React from "react";
import {
    useGetOne,
} from "react-admin";

export const ManifestationTextField = (props) => {
    const manifestation = useGetOne(
        "manifestations", props.record === undefined ? "":props.record.manifestation_id
    );

    if(manifestation.error){
        return(
            <b>- - -</b>
        );
    }
    if(manifestation.loading){
        return(
            <b>Cargando...</b>
        );
    }
    return(
        <b>{manifestation.data.name}</b>
    );
};