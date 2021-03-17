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
    const images = useSelector((state) => state.countryDetail.countryDetail.imageUrlList)
    const classes = useStyles()
    useEffect(() => {
        let modImages = []
        if (images) {
            for (let i in images) {
                let img = {
                    original: images[i].url,
                    originalTitle: images[i].description,
                    thumbnail: images[i].url,
                }
                modImages.push(img)
            }
            setModImages(modImages)
        }
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