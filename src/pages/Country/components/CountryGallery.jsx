import { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery"
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    main: {
        padding: "0 3rem",
        // width: "45%",
    },
})

export default function CountryGallery({ images }) {
    const [modImages, setModImages] = useState([])
    const classes = useStyles()

    useEffect(() => {
        let modImage = []
        for (var i in images) {
            let img = {
                original: images[i].photoUrl,
                thumbnail: images[i].name,
            }
            modImage.push(img)
        }
        setModImages(modImage)
    }, [images])
    return (
        images && (
            <div className={classes.main}>
                <h3>Gallery</h3>
                <Card>
                    <ImageGallery
                        items={modImages}
                        showPlayButton={false}
                        showThumbnails={true}
                    />
                </Card>
            </div>
        )
    )
}
