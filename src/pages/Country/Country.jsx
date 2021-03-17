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
import CurrencyWidget from "./components/CurrrencyWidget"
import CountryTime from "./components/CountryTime"

export function Country(props) {
    const dispatch = useDispatch()
    const lang = useSelector((state) => state.locale.locale)
    const country = useSelector((state) => state.countryDetail)
    const { countryName, capitalName } = props.match.params


    useEffect(() => {
        dispatch(updateLocale(i18next.language))
    }, [dispatch])
    useEffect(() => {
        const _getCountryDetail = async () => {
            dispatch(updateCountryDetail({ isLoading: true }))
            const res = await getCountryDetail(countryName, capitalName, lang)
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
            <CountryDetail />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "20%" }}>
                    <CountryWeather city={country.countryDetail.capitalEN} lang={lang} />
                    <CurrencyWidget code={country.countryDetail.currencyCode} />
                    <CountryTime TZcode={country.countryDetail.timezone} />
                </div>
                <CountryVideo />
            </div>
            <div style={{ maxWidth: "500px", maxHeight: "600px" }}>
                <CountryGallery />
            </div>
        </div>
    )
}

export default Country
