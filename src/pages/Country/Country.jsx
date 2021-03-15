import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateCountryDetail } from "../../redux/actions/countryDetailActions"

import getCountryDetail from "../../services/getCountryDetail"

import CountryDetail from "./components/CountryDetail"
import CountryVideo from "./components/CountryVideo"
import CountryGallery from "./components/CountryGallery"
import Grid from "@material-ui/core/Grid"
import CountryWeather from "./components/CountryWeather"
export function Country(props) {
    const id = props.match.params.id

    const dispatch = useDispatch()
    const country = useSelector((state) => state.countryDetail)
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
            <CountryDetail
                country={country.countryDetail}
                isLoading={country.isLoading}
            ></CountryDetail>
            <Grid container className={"col"}>
                <Grid item xs={6}>
                    <CountryVideo
                        url={country.countryDetail.videoUrl}
                        poster={country.countryDetail.imageUrl}
                    />
                </Grid>
                <Grid item xs={6}>
                    {country.countryDetail.places && (
                        <CountryGallery images={country.countryDetail.places} />
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

export default Country
