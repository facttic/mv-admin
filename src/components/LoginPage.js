import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification, useTranslate } from "react-admin";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import PeopleIcon from '@material-ui/icons/People';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { theme, typography } from "./theme";


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "24px",
  },
  paper: {
    typography: typography.fontFamily,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
    margin: "auto",
    padding: theme.spacing(4, 0),
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
  },
  submit: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    borderRadius: "8px"
  },
  title: {
    fontWeight: "bold"
  }
}));

export const LoginPage = ({ theme }) => {
  const classes = useStyles();
  const translate = useTranslate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const submit = (e) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify(translate("login.authError")));
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <PeopleIcon />
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h6">
        Marchas Virtuales
      </Typography>
      <Typography component="h1" variant="subtitle1">
        Admin
      </Typography>
      <form className={classes.form} onSubmit={submit}>
        <TextField 
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Usuario"
          autoComplete="email"
          autoFocus
        />
        <TextField
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
          margin="normal"
          required
          fullWidth
          label="Contraseña"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          className={classes.submit}
          onClick={submit}
        >
          Sign in
        </Button>
      </form>
      </div>
      <Notification />
      </Container>
  );
};
