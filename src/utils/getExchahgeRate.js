// import axios from "axios"
// import { EXCHANGE_API_URL, EXCHANGE_PAIRS } from "./CONSTANT"

export default function getExchangeRates() {

    return {
        // async 
        getCurrentRate(currency) {
            // let url = `${EXCHANGE_API_URL}${currency}`
            //    let response = await axios.get(url)
            // console.log(response.data.conversion_rates)
            return { USD: 0.002388, EUR: 0.001998, RUB: 0.1756 }
        }
    }
}