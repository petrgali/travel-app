import React, { useState } from "react"
import {
    makeStyles,
    CircularProgress,
    AppBar,
    Button,
    IconButton,
} from "@material-ui/core"
import { withNamespaces } from "react-i18next"
import { useSelector } from "react-redux"
import Register from "./Register"
import UserMenu from "./UserMenu"
import LangMenu from "./LangMenu"
import Login from "./Login"
import SearchBar from "./SearchBar"
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded"
import Icon from "@material-ui/core/Icon"
import Logo from "../assets/logo.svg"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "fit-content",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    menuButton: {
        margin: theme.spacing(2),
        textTransform: "none",
        color: "white",
    },
    logo: {
        paddingLeft: "1rem",
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
            <Icon className={classes.logo}>
                <img src={Logo} alt="" />
            </Icon>
            <SearchBar />

            {!userState.isLoading && (
                <>
                    {!userState.username && (
                        <>
                            <IconButton
                                className={classes.menuButton}
                                onClick={handleLoginOpen}
                            >
                                <ExitToAppRoundedIcon />
                            </IconButton>
                            <Login
                                isOpen={isLoginOpen}
                                handleClose={handleLoginClose}
                            />
                            <Button
                                className={classes.menuButton}
                                onClick={handleRegisterOpen}
                            >
                                Регистрация
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
