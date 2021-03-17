import { useEffect, useState } from "react"
import getWeather from "../../../services/getWeather"
import { makeStyles } from "@material-ui/core"
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CircularProgress,
} from "@material-ui/core"
import { withNamespaces } from "react-i18next"

const weather = getWeather()
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "fit-content",
        height: "10rem",
        background:
            "linear-gradient(90deg, rgba(250,217,97,1) 0%, rgba(247,107,28,1) 100%)",
        margin: "0 3rem",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        height: 110,
        width: 150,
    },
    icon: {
        width: 90,
        height: 90,
        margin: "auto",
    },
    description: {
        display: "flex",
        justifyContent: "center",
    },
    stat: {
        display: "flex",
        width: 100,
        flexDirection: "column",
        paddingBottom: theme.spacing(1),
    },
}))
function CountryWeather({ city, lang, t }) {
    const classes = useStyles()
    let [weatherData, updateWeather] = useState({})
    let [weatherIcon, updateIcon] = useState("")
    let requestConfig = {
        city: city,
        lang: lang,
    }
    useEffect(() => {
        if (city)
            weather.current(requestConfig).then((response) => {
                updateWeather({ ...response })
                updateIcon(weather.getIcon(response.weather[0].icon))
            })
        // eslint-disable-next-line
    }, [lang, city])
    return (
        weatherIcon && (
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h2">
                            {+weatherData.main.temp.toFixed()}&deg;
                        </Typography>
                        <div className={classes.stat}>
                            <p>
                                {t("Humidity")} {weatherData.main.humidity}%
                            </p>
                            {/* <p>Ветер {weatherData.wind.speed} м/сек</p> */}
                        </div>
                    </CardContent>
                </div>
                <div className={classes.cover}>
                    <CardMedia
                        className={classes.icon}
                        image={weatherIcon}
                        title="weather icon"
                    />
                    <p> {t(weatherData.weather[0].main)}</p>
                </div>
            </Card>
        )
    )
}
export default withNamespaces()(CountryWeather)
