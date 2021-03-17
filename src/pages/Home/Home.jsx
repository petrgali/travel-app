import { useEffect } from "react"
import CountryCard from "./components/CountryCard"
import { useSelector, useDispatch } from "react-redux"
import { updateCountries } from "../../redux/actions/countryActions"
import { useHistory } from "react-router-dom"
import getCountries from "../../services/getCountries"
import i18next from "i18next"
import { updateLocale } from "../../redux/actions/localeAction"

export default function Home() {
    const history = useHistory()
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.country.countries)
    const lang = useSelector((state) => state.locale)

    useEffect(() => {
        const _getCountries = async (lang) => {
            const res = await getCountries(lang.locale)
            if (res) dispatch(updateCountries(res))
        }
        if (lang.locale) _getCountries(lang)
        // eslint-disable-next-line
    }, [lang])
    useEffect(() => {
        dispatch(updateLocale(i18next.language))
    }, [dispatch])

    const handleClick = (code) => {
        history.push(`/country/${code}`)
    }

    return (
        <>
            <CountryCard countries={countries} handleClick={handleClick} />
        </>
    )
}
