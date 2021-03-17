import { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import "../../../../node_modules/video-react/dist/video-react.css"
import { Player, LoadingSpinner } from "video-react"
import { Card } from "@material-ui/core"
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles({
    main: {
        padding: "0 3rem",
    },
})

function CountryVideo({ t }) {
    const classes = useStyles()
    const [video, setVideo] = useState("")
    const [img, setImg] = useState("")
    const country = useSelector((state) => state.countryDetail.countryDetail)
    useEffect(() => {
        const { videoUrl, imageUrl } = country
        setImg(imageUrl)
        setVideo(videoUrl)
    }, [country])

    return (
        <>
            <div className={classes.main}>
                <h3>{t("Watch video")}</h3>
                <Card>
                    <Player src={video} poster={img}>
                        <LoadingSpinner />
                    </Player>
                </Card>
            </div>
        </>
    )
}

export default withNamespaces()(CountryVideo)
