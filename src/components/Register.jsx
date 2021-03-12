import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, Typography, DialogContent, IconButton, makeStyles, TextField } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import registerValidator from '../utils/validators';
import UploadFiled from './UploadField';

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 16,
  },
  dialogTitle: {
    fontWeight: 900,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dropzone: {
    height: 50,
  },
  previewChip: {
    minWidth: 160,
    maxWidth: 210
  },
}));

const Register = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    avatar: null,
  });

  const canRegister = () => (Object.keys(registerValidator).every((element) => {
    if (element === 'confirmPassword') return (
      !registerValidator.confirmPassword.validate(form.password, form.confirmPassword).error
    )
    return !registerValidator[element].validate(form[element]).error
  }))

  return (
    <Dialog fullWidth maxWidth="xs" open>
      <DialogTitle>
        <Typography className={classes.dialogTitle}>Регистрация</Typography>
        {true ? (
          <IconButton aria-label="close" className={classes.closeButton}>
            <Close />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>
        <form className={classes.form}>
          <TextField
            error={(
              form.username !== "" &&
              registerValidator.username.validate(form.username).error
            )}
            helperText={(
              form.username !== "" &&
              registerValidator.username.validate(form.username).message
            )}
            size="small"
            label="Имя"
            variant="outlined"
            onChange={(event) => setForm({ ...form, username: event.target.value })}
          />
          <TextField
            error={(
              form.password !== "" &&
              registerValidator.password.validate(form.password).error
            )}
            helperText={(
              form.password !== "" &&
              registerValidator.password.validate(form.password).message
            )}
            type="password"
            size="small"
            label="Пароль"
            variant="outlined"
            onChange={(event) => setForm({ ...form, password: event.target.value })}
          />
          <TextField
            error={(
              form.confirmPassword !== "" &&
              registerValidator.confirmPassword.validate(form.password, form.confirmPassword).error
            )}
            helperText={(
              form.confirmPassword !== "" &&
              registerValidator.confirmPassword.validate(form.password, form.confirmPassword).message
            )}
            type="password"
            size="small"
            label="Подвердить пароль"
            variant="outlined"
            onChange={(event) => setForm({ ...form, confirmPassword: event.target.value })}
          />
          <UploadFiled
            image={form.avatar}
            setImage={(value) => setForm({ ...form, avatar: value })}
          />
          <Button
            size="large"
            variant="contained"
            color="primary"
            disabled={!canRegister()}
          >
            Регистрация
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Register
