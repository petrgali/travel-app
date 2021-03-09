import { useLocation } from "react-router-dom"

export default function Country() {
    let URL = useLocation().pathname.split("/")
    return (
        <div>i'm page about {URL[URL.length-1]}</div>
    )
}