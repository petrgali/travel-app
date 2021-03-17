import axios from "axios"
import { config } from "./constants"

const _apiBase = config.url.API_URL

const getCountries = async () => {
    try {
        const res = await axios.get(`${_apiBase}countries/`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export default getCountries
