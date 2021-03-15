import { useState } from "react"
import CountryCard from "./components/CountryCard"
import { countriesDummy } from "../CONSTANT"

export default function Home() {
    let [countriesList] = useState(countriesDummy)

    return (
        <>
            <CountryCard countries={countriesList} />
        </>
    )
}
