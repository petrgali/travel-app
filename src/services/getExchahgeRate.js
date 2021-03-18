import axios from "axios"
import { EXCHANGE_API_URL} from "./CONSTANT"

export default function getExchangeRates() {
    return {
        async getCurrentRate(currency) {
            let url = `${EXCHANGE_API_URL}${currency}`
               return await axios.get(url)
        }
    }
}