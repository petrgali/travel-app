import { UPDATE_COUNTRY_DETAIL } from "../types"

export const updateCountryDetail = (data) => ({
    type: UPDATE_COUNTRY_DETAIL,
    payload: data,
})
