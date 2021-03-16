import React, { useState } from "react"
import { makeStyles, Button, Menu, MenuItem } from "@material-ui/core"
import { withNamespaces } from "react-i18next"
import i18n from "../i18n/i18n"

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        background: "white",
        "&:hover": {
            background: "white",
        },
    },
}))

const LangMenu = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
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

    return (
        <>
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
        </>
    )
}

export default withNamespaces()(LangMenu)
