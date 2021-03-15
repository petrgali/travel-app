import { useState } from "react"
import CountryCard from "./components/CountryCard"
import SearchBar from "./components/SearchBar"
import handleSearch from "../../utils/search"
import { countriesDummy } from "../CONSTANT"
import CountryTime from "../Country/components/CountryTime"

export default function Home() {
    let [countriesList, updateList] = useState(countriesDummy)
    const handle = (request) => updateList(handleSearch(request, countriesDummy))
    return (
        <>
            <CountryTime />
            <SearchBar handleSearch={(request) => handle(request)} />
            <CountryCard countries={countriesList} />
        </>
    )
}
