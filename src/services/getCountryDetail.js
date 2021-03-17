import axios from "axios"
import { config } from "./constants"

const _apiBase = config.single.API_URL

const getCountryDetail = async (id, locale) => {
    try {
        const res = await axios.get(`${_apiBase}ISOCode=${id}&lang=${locale}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export default getCountryDetail
