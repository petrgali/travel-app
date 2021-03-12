import ImageGallery from "react-image-gallery"
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import { images } from "../CONSTANT"

export default function CountryGallery() {
    return (
            <ImageGallery
                items={images}
                showPlayButton={false}
            />
    )
}