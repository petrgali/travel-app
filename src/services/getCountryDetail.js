import axios from "axios"
import { config } from "./constants"

const _apiBase = config.url.API_URL

const getCountryDetail = async (id) => {
    try {
        const res = await axios.get(`${_apiBase}countries/${id}`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export default getCountryDetail
