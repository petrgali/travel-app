import { Container, IconButton, InputBase, makeStyles, Paper } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
// import TextField from "@material-ui/core/TextField"


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4 px',
        display: 'flex',
        alignItems: 'center',
        width: "md",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    }
}))

const handleSearch = (event) => {
    event.preventDefault()
}

export default function SearchBar() {
    const classes = useStyles()
    return (
        <Container maxWidth="md"
            onChange={() => console.log("!")}
            onClick={(event) => handleSearch(event)}>
            <Paper component="form" className={classes.root} >
                <InputBase
                    autoFocus={true}
                    className={classes.input}
                    placeholder="search..."
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </ Container>
    )
}