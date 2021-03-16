import { useEffect } from "react"
import CountryCard from "./components/CountryCard"
import { useSelector, useDispatch } from "react-redux"
import { updateCountries } from "../../redux/actions/countryActions"
import { useHistory } from "react-router-dom"

import getCountries from "../../services/getCountries"

export default function Home() {
    const history = useHistory()
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.country.countries)

    useEffect(() => {
        const _getCountries = async () => {
            const res = await getCountries()
            if (res) dispatch(updateCountries(res))
        }
        _getCountries()
    }, [dispatch])

    const handleClick = (id) => {
        history.push(`/country/${id}`)
    }

    return (
        <>
            <CountryCard countries={countries} handleClick={handleClick} />
        </>
    )
}
