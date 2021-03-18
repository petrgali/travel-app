import React, { useState } from "react"
import {
    makeStyles,
    CircularProgress,
    AppBar,
    IconButton,
    Grid,
    Box,
} from "@material-ui/core"
import { withNamespaces } from "react-i18next"
import { useSelector } from "react-redux"
import Register from "./Register"
import UserMenu from "./UserMenu"
import LangMenu from "./LangMenu"
import Login from "./Login"
import SearchBar from "./SearchBar"
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded"
import { Icon, Button } from "@material-ui/core"
import Logo from "../../assets/logo_white.svg"
import { useLocation } from "react-router"
import { PersonAdd } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        display: "inline-block",
    },
    btns: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        columnGap: 16,
    },
    menuButton: {
        margin: 0,
        textTransform: "none",
        color: "white",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 25,
    },
    iconBtn: {
        minWidth: "none",
        "&:hover": {
            background: "none",
        },
    },
}))

const Header = ({ t }) => {
    const location = useLocation()
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
            <Grid container spacing={2} justify="space-between">
                <Grid className={classes.logo} item xs="auto" sm="auto">
                    <Button href="/" variant="link" className={classes.iconBtn}>
                        <Icon className={classes.icon}>
                            <img src={Logo} alt="logo" width={25} />
                        </Icon>
                    </Button>
                </Grid>
                {!location.pathname.includes("country") && (
                    <Box clone order={{ xs: 3, sm: 2 }}>
                        <Grid item alignContent="center" xs={12} sm>
                            <SearchBar />
                        </Grid>
                    </Box>
                )}

                <Box clone order={{ xs: 2, sm: 3 }}>
                    <Grid className={classes.btns} item xs sm="auto">
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
                                        <IconButton
                                            className={classes.menuButton}
                                            onClick={handleRegisterOpen}
                                        >
                                            <PersonAdd />
                                        </IconButton>
                                        <Register
                                            isOpen={isRegisterOpen}
                                            handleClose={handleRegisterClose}
                                        />
                                    </>
                                )}

                                {userState.username && (
                                    <UserMenu user={userState} />
                                )}
                            </>
                        )}
                        <LangMenu />
                    </Grid>
                </Box>
            </Grid>
        </AppBar>
    )
}

export default withNamespaces()(Header)
