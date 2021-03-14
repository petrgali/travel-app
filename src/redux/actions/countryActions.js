import { UPDATE_COUNTRIES } from "../types"

export const updateCountries = (data) => ({
    type: UPDATE_COUNTRIES,
    payload: data,
})
