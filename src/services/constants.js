const prod = {
    url: {
        API_URL: "",
    },
}

const dev = {
    url: {
        // temporary
        API_URL: "https://travel-app-demo.herokuapp.com/",
    },
}
export const config = process.env.NODE_ENV === "development" ? dev : prod
export default config
