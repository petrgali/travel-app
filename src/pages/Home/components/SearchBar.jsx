import { Container, IconButton, InputBase, makeStyles, Paper } from "@material-ui/core"
import { useEffect, useState } from "react"
import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4 px",
        display: "flex",
        alignItems: "center",
        width: "md",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: "large"
    },
    iconButton: {
        padding: 10,
    },
}))

export default function SearchBar(props) {
    const classes = useStyles()
    let [searchMsg, updateMsg] = useState('')

    useEffect(() => {
        props.handleSearch(searchMsg)
    }, [searchMsg])

    return (
        <Container maxWidth="md"
            onSubmit={(event) => {
                event.preventDefault()
                props.handleSearch(searchMsg)
            }}>
            <Paper component="form" elevation={3} className={classes.root} >
                <InputBase
                    value={searchMsg}
                    onChange={(event) => updateMsg(event.target.value)}
                    autoFocus
                    className={classes.input}
                    placeholder="search..."

                />
                <IconButton type="submit" aria-label="search" className={classes.iconButton}>
                    <SearchIcon />
                </IconButton>
                <IconButton aria-label="close"
                    className={classes.iconButton}
                    onClick={() => updateMsg('')}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </ Container>
    )
}