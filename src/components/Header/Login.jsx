import {
    Dialog,
    DialogTitle,
    makeStyles,
    Typography,
    IconButton,
    DialogContent,
    TextField,
    Button,
    CircularProgress,
} from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { Close } from "@material-ui/icons"
import React, { useState } from "react"
import { login } from "../../services/auth"
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles((theme) => ({
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
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: 16,
    },
}))

const Login = (props) => {
    const { isOpen, handleClose, t } = props
    const classes = useStyles()
    const [form, setForm] = useState({
        username: "",
        password: "",
    })
    const [service, setService] = useState({
        isLoading: false,
        error: null,
    })

    const canLogin = () => form.username !== "" && form.password !== ""

    const handleLogin = async () => {
        if (!canLogin()) return
        setService({ ...service, isLoading: true })
        const response = await login(form)
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
                    {t("Войти")}
                </Typography>
                {true ? (
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
                        size="small"
                        label={t("Имя")}
                        variant="outlined"
                        onChange={(event) =>
                            setForm({ ...form, username: event.target.value })
                        }
                    />
                    <TextField
                        type="password"
                        size="small"
                        label={t("Пароль")}
                        variant="outlined"
                        onChange={(event) =>
                            setForm({ ...form, password: event.target.value })
                        }
                    />
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        disabled={!canLogin()}
                    >
                        {service.isLoading && (
                            <CircularProgress size={24} color="white" />
                        )}
                        {!service.isLoading && "Войти"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default withNamespaces()(Login)
