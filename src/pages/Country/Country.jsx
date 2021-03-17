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
import Map from "./components/map/Map"
import { makeStyles } from "@material-ui/core"
import { useLocation } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    country: {
        marginTop: 80,
        overflow: "hidden",
    },
}))

export function Country(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const lang = useSelector((state) => state.locale.locale)
    const country = useSelector((state) => state.countryDetail)
    const { pathname } = useLocation()
    const { countryName, capitalName } = props.match.params

    useEffect(() => {
        dispatch(updateLocale(i18next.language))
    }, [dispatch])
    useEffect(() => {
        window.scrollTo(0, 0)
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
    }, [lang, pathname])
    return (
        <div className={classes.country}>
            <CountryWeather />
            <CountryDetail />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "20%",
                    }}
                >
                    <CountryWeather
                        city={country.countryDetail.capitalEN}
                        lang={lang}
                    />
                    <CurrencyWidget code={country.countryDetail.currencyCode} />
                    <CountryTime TZcode={country.countryDetail.timezone} />
                </div>
                <CountryVideo />
            </div>
            <CountryGallery />
            <Map geoURL={country.countryDetail.geoJsonUrl} />
        </div>
    )
}

export default Country
