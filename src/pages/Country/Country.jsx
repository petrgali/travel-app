import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import i18next from "i18next"
import { updateLocale } from "../../redux/actions/localeAction"
import { updateCountryDetail } from "../../redux/actions/countryDetailActions"
import getCountryDetail from "../../services/getCountryDetail"
import CountryDetail from "./components/CountryDetail"
import CountryVideo from "./components/CountryVideo"
import CountryGallery from "./components/CountryGallery"
import CountryWeather from "./components/CountryWeather"

export function Country(props) {
    const dispatch = useDispatch()
    const lang = useSelector((state) => state.locale.locale)
    const country = useSelector((state) => state.countryDetail)
    const id = props.match.params.id

    useEffect(() => {
        dispatch(updateLocale(i18next.language))
    }, [dispatch])
    useEffect(() => {
        const _getCountryDetail = async () => {
            dispatch(updateCountryDetail({ isLoading: true }))
            const res = await getCountryDetail(id, lang)
            if (res)
                dispatch(
                    updateCountryDetail({
                        countryDetail: res,
                        isLoading: false,
                    })
                )
        }
        if (lang) _getCountryDetail()
        // eslint-disable-next-line
    }, [lang])
    return (
        <div className="country">
            <CountryWeather city={country.countryDetail.capital} lang={lang} />
            <CountryDetail />
            <CountryGallery />
            <CountryVideo />
        </div>
    )
}

export default Country
