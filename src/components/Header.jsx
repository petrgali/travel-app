import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import i18n from "../i18n"
import { withNamespaces } from "react-i18next"
import Register from "./Register"

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
}))

const Header = ({ t }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const languages = ["kz", "ru", "en"]
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (e) => {
        const { myValue } = e.currentTarget.dataset
        changeLanguage(myValue)
        setAnchorEl(null)
    }

    const handleRegisterOpen = () => setIsRegisterOpen(true)

    const handleRegisterClose = () => setIsRegisterOpen(false)

    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.root}>
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
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.menuButton}
            >
                {i18n.language}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {languages.map((lang, idx) => (
                    <MenuItem
                        key={idx}
                        data-my-value={lang}
                        onClick={handleClose}
                    >
                        {lang}
                    </MenuItem>
                ))}
            </Menu>
        </AppBar>
    )
}

export default withNamespaces()(Header)
