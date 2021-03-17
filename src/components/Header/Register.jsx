import React, { useState } from "react"
import {
    Button,
    Dialog,
    DialogTitle,
    Typography,
    DialogContent,
    IconButton,
    makeStyles,
    TextField,
    CircularProgress,
} from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { Close } from "@material-ui/icons"
import registerValidator from "../../utils/validators"
import UploadFiled from "./UploadField"
import { register } from "../../services/auth"
import { withNamespaces } from "react-i18next"

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
    dialogContent: {
        padding: 24,
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}))

const Register = (props) => {
    const { isOpen, handleClose, t } = props
    const classes = useStyles()
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        avatar: null,
    })
    const [service, setService] = useState({
        isLoading: false,
        error: null,
    })

    const canRegister = () =>
        Object.keys(registerValidator).every((element) => {
            if (element === "confirmPassword")
                return !registerValidator.confirmPassword.validate(
                    form.password,
                    form.confirmPassword
                ).error
            return !registerValidator[element].validate(form[element]).error
        })

    const handleRegister = async () => {
        if (!canRegister()) return
        setService({ ...service, isLoading: true })
        const data = { ...form }
        delete data.confirmPassword
        if (!data.avatar) delete data.avatar
        const response = await register(data)
        if (response.message || response.error) {
            setService({
                ...service,
                isLoading: false,
                error: response.message || response.error,
            })
        } else {
            setService({ ...service, isLoading: false, error: null })
            window.location.reload()
        }
    }

    return (
        <Dialog fullWidth maxWidth="xs" open={isOpen} onClose={handleClose}>
            <DialogTitle>
                <Typography className={classes.dialogTitle}>
                    {t("Регистрация")}
                </Typography>
                {isOpen ? (
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent className={classes.dialogContent} dividers>
                <form className={classes.form}>
                    {service.error !== null && (
                        <MuiAlert
                            onClose={() =>
                                setService({ ...service, error: null })
                            }
                            severity="error"
                        >
                            {service.error}
                        </MuiAlert>
                    )}
                    <TextField
                        error={
                            form.username !== "" &&
                            registerValidator.username.validate(form.username)
                                .error
                        }
                        helperText={
                            form.username !== "" &&
                            registerValidator.username.validate(form.username)
                                .message
                        }
                        size="small"
                        label={t("Имя")}
                        variant="outlined"
                        onChange={(event) =>
                            setForm({ ...form, username: event.target.value })
                        }
                    />
                    <TextField
                        error={
                            form.password !== "" &&
                            registerValidator.password.validate(form.password)
                                .error
                        }
                        helperText={
                            form.password !== "" &&
                            registerValidator.password.validate(form.password)
                                .message
                        }
                        type="password"
                        size="small"
                        label={t("Пароль")}
                        variant="outlined"
                        onChange={(event) =>
                            setForm({ ...form, password: event.target.value })
                        }
                    />
                    <TextField
                        error={
                            form.confirmPassword !== "" &&
                            registerValidator.confirmPassword.validate(
                                form.password,
                                form.confirmPassword
                            ).error
                        }
                        helperText={
                            form.confirmPassword !== "" &&
                            registerValidator.confirmPassword.validate(
                                form.password,
                                form.confirmPassword
                            ).message
                        }
                        type="password"
                        size="small"
                        label="Подвердить пароль"
                        variant="outlined"
                        onChange={(event) =>
                            setForm({
                                ...form,
                                confirmPassword: event.target.value,
                            })
                        }
                    />
                    <UploadFiled
                        image={form.avatar}
                        setImage={(value) =>
                            setForm({ ...form, avatar: value })
                        }
                    />
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                        disabled={!canRegister()}
                    >
                        {service.isLoading && (
                            <CircularProgress size={24} color="white" />
                        )}
                        {!service.isLoading && "Регистрация"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default withNamespaces()(Register)
