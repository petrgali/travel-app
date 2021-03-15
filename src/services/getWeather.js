import { API_KEY, API_URL, ICON_PATH } from "./CONSTANT"

export default function getWeather() {
    return {
        async current(request) {
            const URL = `${API_URL}${request.city}&units=metric&lang=${request.lang}&appid=${API_KEY}`
            return await fetch(URL).then(res => res.json())
        },
        getIcon(name) {
            return ICON_PATH[name]
        }
    }

}