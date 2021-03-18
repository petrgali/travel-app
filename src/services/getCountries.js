import axios from "axios"
import { config } from "./constants"

const _apiBase = config.list.API_URL

const getCountries = async (locale) => {
    try {
        const res = await axios.get(`${_apiBase}${locale}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export default getCountries
