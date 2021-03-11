import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        height: "3rem",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: "1rem",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.root}>
            <Button color="inherit">en</Button>
        </AppBar>
    )
}

export default Header
