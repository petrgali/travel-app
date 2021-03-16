import { useState } from "react"
import {
    Container,
    IconButton,
    InputBase,
    makeStyles,
    Paper,
} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"
import Zoom from "@material-ui/core/Zoom"
import { useDispatch } from "react-redux"
import { updateSearch } from "../redux/actions/searchActions"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    input: {
        margin: "0.5rem 2rem",
        flex: 1,
    },
}))

export default function SearchBar() {
    const classes = useStyles()
    const [searchMsg, updateMsg] = useState("")
    const dispatch = useDispatch()

    const _handleSearch = (request) => {
        dispatch(updateSearch(request))
    }

    return (
        <Container
            maxWidth="md"
            onSubmit={(event) => {
                event.preventDefault()
                _handleSearch(searchMsg)
            }}
        >
            <Paper component="form" elevation={3} className={classes.root}>
                <InputBase
                    value={searchMsg}
                    onChange={(event) => {
                        updateMsg(String(event.target.value))
                        _handleSearch(event.target.value)
                    }}
                    autoFocus
                    className={classes.input}
                    placeholder="search..."
                />
                <Zoom in={!!searchMsg}>
                    <IconButton
                        aria-label="close"
                        onClick={() => updateMsg("")}
                    >
                        <CloseIcon />
                    </IconButton>
                </Zoom>
                <IconButton
                    type="submit"
                    aria-label="search"
                    className={classes.iconButton}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Container>
    )
}
