import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from '../resource/logo.jpg';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },

  buttons: {
    '& > *': {
      margin: theme.spacing(1),
      textAlign: 'center',
    },
  },

}));

export default function Login() {

    const classes = useStyles();

    return (
      <div className={classes.root} id="login">
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <h1 id="title">Boating and Booming</h1>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <img id="logo" src={Logo}></img>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
            <form className={classes.form} id="login-form">
              <TextField required id="name" label="用户名" variant="outlined" />
              <TextField required id="password" label="密码" type="password" autoComplete="current-password" variant="outlined" />
            </form>
            </Paper>
            <Paper className={classes.paper} elevation={0}>
              <div className={classes.buttons}>
                <Button variant="contained" color="primary" onClick={() => {window.location.href = '#/gamemode'}}>登陆</Button>
                <Button variant="contained" onClick={() => {document.getElementById("login-form").reset()}}>取消</Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
}

