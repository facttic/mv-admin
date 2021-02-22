import * as React from "react";
import {
  useGetIdentity,
  Loading
} from "react-admin";
import { Redirect } from 'react-router';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';


export const ManifestationManageList = (props) => {
  console.log(props);
  const { identity, loading: identityLoading } = useGetIdentity();

  if (identityLoading) {
    return <Loading></Loading>;
  }
  if (identity=== undefined || !identity.manifestation_id) {
    return (
      <Card>
        <Title title="Marcha no asignada" />
        <CardContent>
        <Box textAlign="center" m={1}>
          <Typography variant="h4" paragraph>
            No tiene asignado ninguna marcha
          </Typography>
          <Typography variant="body1">
            Deberá esperar a que le asignen una
          </Typography>
        </Box>
        </CardContent>
      </Card>
    );
  }
  if(identity.manifestation_id){
    return (<Redirect to={"/manifestations/"+ identity.manifestation_id} />);
  }
};
