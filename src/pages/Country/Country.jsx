import React, { useEffect } from "react"
import CountryDetail from "./components/CountryDetail"
import { useSelector, useDispatch } from "react-redux"
import { updateCountryDetail } from "../../redux/actions/countryDetailActions"

import getCountryDetail from "../../services/getCountryDetail"

export function Country(props) {
    const id = props.match.params.id

    const dispatch = useDispatch()
    const country = useSelector((state) => state.countryDetail)

    console.log(country)
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
        <CountryDetail
            country={country.countryDetail}
            isLoading={country.isLoading}
        ></CountryDetail>
    )
}

export default Country
