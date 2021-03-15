import React, { useEffect } from "react"
import CountryDetail from "./components/CountryDetail"
import { useSelector, useDispatch } from "react-redux"
import { updateCountryDetail } from "../../redux/actions/countryDetailActions"

import getCountryDetail from "../../services/getCountryDetail"

export function Country(props) {
    const id = props.match.params.id

    const dispatch = useDispatch()
    const country = useSelector((state) => state.countryDetail.countryDetail)
    console.log(country)
    useEffect(() => {
        const _getCountryDetail = async () => {
            const res = await getCountryDetail(id)
            if (res) dispatch(updateCountryDetail(res))
        }
        _getCountryDetail()
    }, [dispatch, id])

    return <CountryDetail country={country}></CountryDetail>
}

export default Country
