import { useState } from "react"
// import CountryCard from "./components/CountryCard"
import SearchBar from "./components/SearchBar"
import handleSearch from "../../utils/search"
import {countriesDummy} from "../CONSTANT"
import CurrencyWidget from "../Country/components/CurrrencyWidget"

export default function Home() {
    let [countriesList, updateList] = useState(countriesDummy)
    const handle = (request) => updateList(handleSearch(request, countriesDummy))
    return (
        <>
            <SearchBar handleSearch={(request) => handle(request)} />
            {/* <CountryCard countries={countriesList} /> */}
            <CurrencyWidget />
        </>
    )
}
