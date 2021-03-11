import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import i18n from "../i18n"
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "3rem",
        justifyContent: "center",
        alignItems: "flex-end",
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
    const [anchorEl, setAnchorEl] = React.useState(null)

    const languages = ["en", "ru"]
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

    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.root}>
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
