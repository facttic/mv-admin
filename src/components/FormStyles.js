import { makeStyles } from "@material-ui/core/styles";

export const FormStyles = makeStyles((theme) => ({
    createForm: {
      padding: theme.spacing(2),
      margin: theme.spacing(0, 2)
    },
    createBox: {
      display:"flex", 
      justifyContent:"center"
    },
    root: {
      margin: theme.spacing(4, 6, 6, 6),
      width: "70%",
      minWidth: "200px"
    }
  }))