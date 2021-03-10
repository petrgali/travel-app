import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { ROOT } from "../../navigation/CONSTANTS"

export default function Country() {
    let URL = useLocation().pathname.split("/")
    return (
        <>
            <Link to={ROOT}>Home</Link>
            <div>i'm page about {URL[URL.length - 1]}</div>
        </>
    )
}