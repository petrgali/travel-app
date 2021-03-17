const prod = {
    list: {
        API_URL: "https://enthusiast17-travel-app-api.herokuapp.com/countries/list/?lang=",
    },
    single:{
        API_URL: "https://enthusiast17-travel-app-api.herokuapp.com/countries/single/?"
    }
}

const dev = {
    url: {
        // temporary
        API_URL: "https://travel-app-demo.herokuapp.com/",
    },
}
// export const config = process.env.NODE_ENV === "development" ? dev : prod
export const config = prod
export default config
