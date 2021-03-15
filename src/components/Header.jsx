import React, { useState } from "react"
import { makeStyles, CircularProgress, AppBar, Button } from "@material-ui/core"
import { withNamespaces } from "react-i18next"
import { useSelector } from "react-redux"
import Register from "./Register"
import UserMenu from "./UserMenu"
import LangMenu from "./LangMenu"
import Login from "./Login"
import SearchBar from "./SearchBar"
import handleSearch from "../utils/search"

const countriesDummy = [
    {
        name: "Kazakhstan",
        capital: "Nur-Sultan",
        previewURL:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcivilianglobal.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fastana.jpg&f=1&nofb=1",
    },
    {
        name: "Mongolia",
        capital: "Ulaanbaatar",
        previewURL:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Fmongolia0815.jpg%3Fitok%3DEazvgF_w&f=1&nofb=1",
    },
]
const useStyles = makeStyles((theme) => ({
    root: {
        height: "fit-content",
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
    let [_, updateList] = useState(countriesDummy)

    const userState = useSelector((state) => state.user)

    const handleRegisterOpen = () => setIsRegisterOpen(true)

    const handleRegisterClose = () => setIsRegisterOpen(false)

    const handleLoginOpen = () => setIsLoginOpen(true)

    const handleLoginClose = () => setIsLoginOpen(false)
    const handle = (request) =>
        updateList(handleSearch(request, countriesDummy))

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
                                Войти
                            </Button>
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
                    <SearchBar handleSearch={(request) => handle(request)} />

                    {userState.username && <UserMenu user={userState} />}
                </>
            )}
            <LangMenu />
        </AppBar>
    )
}

export default withNamespaces()(Header)
