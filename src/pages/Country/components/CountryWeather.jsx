import { useEffect, useState } from "react"
import getWeather from "../../../utils/getWeather"


export default function CountryWeather() {
    let [weatherData, updateWeather] = useState({})
    let [weatherIcon, updateIcon] = useState("")
    let requestConfig = {
        city: "Nur-Sultan",
        lang: "ru"
    }
    useEffect(() => {
        getWeather().current(requestConfig)
            .then(response => {
                updateWeather({ ...response })
                updateIcon(getWeather().getIcon(response.weather[0].icon))
            })
        // eslint-disable-next-line 
    }, [])
    if (weatherData.main)
    return (
        <div>
            {weatherData.name}
            <img src={weatherIcon} alt="" />
            {weatherData.weather[0].description}
            ощущается как 
            {+weatherData.main.feels_like.toFixed()}
        </div>
    )
    return (
        <div>Loading...</div>
    )
}