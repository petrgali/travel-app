import { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import ReactPlayer from "react-player"
import { Card } from "@material-ui/core"
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles({
    cardVid: {
        display: "flex",
        justifyContent: "center",
        width: "min-content",
    },
})

function CountryVideo({ t }) {
    const classes = useStyles()
    const [video, setVideo] = useState("")
    const country = useSelector((state) => state.countryDetail.countryDetail)
    useEffect(() => {
        const { videoUrl } = country
        setVideo(videoUrl)
    }, [country])

    return (
        <>
            <div className={classes.main}>
                <h3>{t("Watch video")}</h3>
                <Card className={classes.cardVid}>
                    <ReactPlayer url={video} controls={true} />
                </Card>
            </div>
        </>
    )
}

export default withNamespaces()(CountryVideo)
