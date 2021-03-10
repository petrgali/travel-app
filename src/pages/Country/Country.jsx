import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { ROOT } from "../../navigation/CONSTANTS"

export default function Country() {
    let { location } = useParams()
    return (
        <>
            <Link to={ROOT}>Home</Link>
            <div>i'm page about {location}</div>
        </>
    )

}