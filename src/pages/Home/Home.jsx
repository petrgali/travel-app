import { makeStyles } from "@material-ui/core"
import CountryCard from "./components/CountryCard"

const useStyles = makeStyles((theme) => ({
    home: {
        marginTop: 80,
        overflow: "hidden",
        [theme.breakpoints.down("xs")]: {
            marginTop: 145,
        },
    },
}))

export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.home}>
            <CountryCard />
        </div>
    )
}
