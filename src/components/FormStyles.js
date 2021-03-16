import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-admin";

export const FormStyles = makeStyles((theme) => ({
    createForm: {
      padding: theme.spacing(2),
      margin: theme.spacing(0, 2)
    },
    createBox: {
      display:"flex", 
      justifyContent:"center",
      padding:"70px"
    },
    root: {
      margin: theme.spacing(4, 6, 6, 6),
      width: "70%",
      minWidth: "200px"
    },
    boolean:{
      padding: theme.spacing(5,0,0,0),
    }
  }))