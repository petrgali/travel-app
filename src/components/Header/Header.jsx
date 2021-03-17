import React, { useState } from "react"
import { makeStyles, CircularProgress, AppBar, Button } from "@material-ui/core"
import { withNamespaces } from "react-i18next"
import { useSelector } from "react-redux"
import Register from "./Register"
import UserMenu from "./UserMenu"
import LangMenu from "./LangMenu"
import Login from "./Login"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "3rem",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        background: "white",
        "&:hover": {
            background: "white",
        },
    },
    loading: {
        marginRight: 16,
    },
}))

const Header = ({ t }) => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const userState = useSelector((state) => state.user)

    const handleRegisterOpen = () => setIsRegisterOpen(true)

    const handleRegisterClose = () => setIsRegisterOpen(false)

    const handleLoginOpen = () => setIsLoginOpen(true)

    const handleLoginClose = () => setIsLoginOpen(false)

    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.root}>
            {userState.isLoading && (
                <CircularProgress
                    className={classes.loading}
                    size={24}
                    color="white"
                />
            )}
            {!userState.isLoading && (
                <>
                    {!userState.username && (
                        <>
                            <Button
                                className={classes.menuButton}
                                onClick={handleLoginOpen}
                            >
                                {t("LogIn")}
                            </Button>
                            <Login
                                isOpen={isLoginOpen}
                                handleClose={handleLoginClose}
                            />
                            <Button
                                className={classes.menuButton}
                                onClick={handleRegisterOpen}
                            >
                                {t("SignIn")}
                            </Button>
                            <Register
                                isOpen={isRegisterOpen}
                                handleClose={handleRegisterClose}
                            />
                        </>
                    )}

                    {userState.username && <UserMenu user={userState} />}
                </>
            )}
            <LangMenu />
        </AppBar>
    )
}

export default withNamespaces()(Header)
