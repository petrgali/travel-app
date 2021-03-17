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
        <div className="main-c">
            <div className={classes.country}>
                <div className="row-c">
                    <div className="col-c">
                        <CountryWeather
                            city={country.countryDetail.capitalEN}
                            lang={lang}
                        />
                        <CountryTime TZcode={country.countryDetail.timezone} />
                    </div>

                    <CurrencyWidget code={country.countryDetail.currencyCode} />
                </div>
                <CountryDetail />

                <CountryVideo />
                <CountryGallery />
                <Map geoURL={country.countryDetail.geoJsonUrl} />
            </div>
        </div>
    )
}

export default Country
