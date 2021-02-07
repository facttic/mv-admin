import * as React from "react";
import {
    useGetOne,
} from "react-admin";

export const ManifestationTextField = (props) => {
    const manifestation = useGetOne(
        "manifestations", props.record.manifestation_id
    );

    console.log("manifestation ",manifestation);
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