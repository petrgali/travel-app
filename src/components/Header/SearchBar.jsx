import { useState, useEffect } from "react"
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
import { updateSearch } from "../../redux/actions/searchActions"
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    container: {
        padding: 0,
    },
    input: {
        margin: "0.5rem",
        flex: 1,
    },
}))

export function SearchBar({ t }) {
    const classes = useStyles()
    const [searchMsg, updateMsg] = useState("")
    const dispatch = useDispatch()

    const _handleSearch = (request) => {
        dispatch(updateSearch(request))
    }

    useEffect(() => {
        if (!searchMsg) dispatch(updateSearch(searchMsg))
        // eslint-disable-next-line
    }, [searchMsg])

    return (
        <Container
            className={classes.container}
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
                    }}
                    autoFocus
                    className={classes.input}
                    placeholder={t("search...")}
                />
                <Zoom in={!!searchMsg}>
                    <IconButton
                        className="close"
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
export default withNamespaces()(SearchBar)
