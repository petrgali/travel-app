import React, { useState } from "react"
import {
  makeStyles,
  CircularProgress,
  AppBar,
  Button,
} from "@material-ui/core"
import { withNamespaces } from "react-i18next"
import { useSelector } from "react-redux"
import Register from "./Register"
import UserMenu from "./UserMenu"
import LangMenu from "./LangMenu"

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
    }
}))

const Header = ({ t }) => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const userState = useSelector((state) => state.user)

    const handleRegisterOpen = () => setIsRegisterOpen(true)

    const handleRegisterClose = () => setIsRegisterOpen(false)

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

                {userState.username && (
                  <UserMenu user={userState} />
                )}
              </>
            )}
            <LangMenu />
        </AppBar>
    )
}

export default withNamespaces()(Header)
