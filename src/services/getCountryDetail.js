import axios from "axios"
import { config } from "./constants"

const _apiBase = config.single.API_URL

const getCountryDetail = async (country, capital, locale) => {
    try {
        const res = await axios.get(`${_apiBase}nameEN=${country}&capitalEN=${capital}`)
        return res.data[locale]
    } catch (e) {
        console.log(e)
    }
}
export default getCountryDetail
