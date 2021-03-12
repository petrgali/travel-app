import "../../../../node_modules/video-react/dist/video-react.css"
import { Player, LoadingSpinner } from "video-react"
import { video } from "../CONSTANT"

export default function CountryVideo() {
    return (
        <>
            <Player src={video.URL} poster={video.poster}>
                <LoadingSpinner />
            </Player>
        </>

    )
}
