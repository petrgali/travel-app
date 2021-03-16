import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateCountryDetail } from "../../redux/actions/countryDetailActions"

import getCountryDetail from "../../services/getCountryDetail"

import CountryDetail from "./components/CountryDetail"
import CountryVideo from "./components/CountryVideo"
import CountryGallery from "./components/CountryGallery"
import CountryWeather from "./components/CountryWeather"
export function Country(props) {
    const id = props.match.params.id

    const dispatch = useDispatch()
    useEffect(() => {
        const _getCountryDetail = async () => {
            dispatch(updateCountryDetail({ isLoading: true }))
            const res = await getCountryDetail(id)
            if (res)
                dispatch(
                    updateCountryDetail({
                        countryDetail: res,
                        isLoading: false,
                    })
                )
        }
        _getCountryDetail()
    }, [dispatch, id])

    return (
        <div className="country">
            <CountryWeather />
            <CountryDetail />
            <CountryVideo />
            <CountryGallery />
        </div>
    )
}

export default Country
