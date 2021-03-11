import { useState } from "react"
import { Container, IconButton, InputBase, makeStyles, Paper } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"
import Zoom from "@material-ui/core/Zoom"


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #a0aec0"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}))

export default function SearchBar() {
    const classes = useStyles()
    let [searchMsg, updateMsg] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        alert(`SEARCH REQUEST FOR ${searchMsg}`)
    }
    return (
        <Container maxWidth="md"
            onSubmit={(event) => handleSearch(event)}>
            <Paper component="form" elevation={3} className={classes.root} >
                <InputBase
                    value={searchMsg}
                    onChange={(event) => updateMsg(event.target.value)}
                    autoFocus
                    className={classes.input}
                    placeholder="search..."

                />
                <Zoom in={!!searchMsg}>
                    <IconButton aria-label="close"
                        className={classes.iconButton}
                        onClick={() => updateMsg('')}>
                        <CloseIcon />
                    </IconButton>
                </Zoom>
                <IconButton type="submit" aria-label="search" className={classes.iconButton}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </ Container>
    )
}
