import "../../../../node_modules/video-react/dist/video-react.css"
import { Player, LoadingSpinner } from "video-react"
import { Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    main: {
        padding: "3rem",
        width: "50%",
    },
})

export default function CountryVideo({ url, poster }) {
    const classes = useStyles()

    return (
        <>
            <div className={classes.main}>
                <Card>
                    <Player src={url} poster={poster}>
                        <LoadingSpinner />
                    </Player>
                </Card>
            </div>
        </>
    )
}
