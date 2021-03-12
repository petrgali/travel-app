import { GET_COUNTRIES, COUNTRIES_ERROR } from "../types"
import axios from "axios"
import { config } from "../../services/constants"

const _apiBase = config.url.API_URL

export const getCountries = () => async (dispatch) => {
    console.log(`${_apiBase}/countries`)
    try {
        const res = await axios.get(`${_apiBase}countries`)
        dispatch({
            type: GET_COUNTRIES,
            payload: res.data,
        })
    } catch (e) {
        dispatch({
            type: COUNTRIES_ERROR,
            payload: console.log(e),
        })
    }
}
