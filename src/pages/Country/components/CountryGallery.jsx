import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ImageGallery from "react-image-gallery"
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles({
    main: {
        padding: "0 3rem",
    },
})

function CountryGallery({ t }) {
    const [modImages, setModImages] = useState([])
    const images = useSelector(
        (state) => state.countryDetail.countryDetail.places
    )

    const classes = useStyles()

    useEffect(() => {
        let modImages = []
        for (var i in images) {
            let img = {
                original: images[i].photoUrl,
                thumbnail: images[i].name,
            }
            modImages.push(img)
        }
        setModImages(modImages)
    }, [images])
    return (
        <div className={classes.main}>
            <h3>{t("Gallery")}</h3>
            <Card>
                <ImageGallery
                    items={modImages}
                    showPlayButton={false}
                    showThumbnails={true}
                />
            </Card>
        </div>
    )
}
export default withNamespaces()(CountryGallery)