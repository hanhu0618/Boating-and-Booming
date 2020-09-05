import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },

  buttom: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));

export default function Login() {

    const classes = useStyles();

    return (
      <div>
        <form className={classes.form} id="login-form">
          <TextField required id="name" label="用户名" variant="outlined" />
          <TextField required id="password" label="密码" type="password" autoComplete="current-password" variant="outlined" />
        </form>
        <div>
          <Button variant="contained" color="primary" onClick={() => {window.location.href = '#/gamemode'}}>登陆</Button>
          <Button variant="contained" onClick={() => {document.getElementById("login-form").reset()}}>取消</Button>
        </div>
      </div>
    );
}

