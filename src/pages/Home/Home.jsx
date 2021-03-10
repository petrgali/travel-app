import { useState } from "react"
import CountryCard from "./components/CountryCard"
import SearchBar from "./components/SearchBar"
import handleSearch from "../../utils/search"

const countriesDummy = [
    {
        name: "Kazakhstan",
        capital: "Nur-Sultan",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcivilianglobal.com%2Fwp-content%2Fuploads%2F2014%2F04%2Fastana.jpg&f=1&nofb=1",
    },
    {
        name: "Mongolia",
        capital: "Ulaanbaatar",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Fmongolia0815.jpg%3Fitok%3DEazvgF_w&f=1&nofb=1",
    },
    {
        name: "Россия",
        capital: "Москва",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.history.com%2F.image%2Ft_share%2FMTYyNzYyODMyODA1MzczNzkz%2Ftopic-russia-gettyimages-605536834.jpg&f=1&nofb=1",
    },
    {
        name: "Finland",
        capital: "Helsinki",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2017%2F12%2F21%2Fworld%2F21Finalnd6%2Fmerlin_131483582_bb732932-6016-45e4-a63e-e65c948aa653-superJumbo.jpg&f=1&nofb=1",
    },
    {
        name: "Norway",
        capital: "Oslo",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs27363.pcdn.co%2Fwp-content%2Fuploads%2F2018%2F09%2FNorway-Hikes-for-Facebook.jpg.optimal.jpg&f=1&nofb=1",
    },
    {
        name: "Греция",
        capital: "Афины",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8f%2FParthenon_from_south.jpg%2F1200px-Parthenon_from_south.jpg&f=1&nofb=1",
    },
    {
        name: "Egypt",
        capital: "Cairo",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexclusivesmedia.webjet.co.nz%2Fuploads%2F2018%2F05%2FBest-Egypt-Nile-cruise-15-min.jpg&f=1&nofb=1",
    },
    {
        name: "Шри-Ланка",
        capital: "Коломбо",
        previewURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sabsanholidays.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F02%2FReasons-to-Visit-Sri-Lanka.jpg&f=1&nofb=1",
    }

]
export default function Home() {
    let [countriesList, updateList] = useState(countriesDummy)
    const handle = (request) => {
        !request
            ? updateList(countriesDummy)
            : updateList(handleSearch(request, countriesDummy))
    }
    return (
        <>
            <SearchBar handleSearch={(request) => handle(request)} />
            <CountryCard countries={countriesList} />
        </>
    )
}