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
export default function CountryWeather() {
    const classes = useStyles()
    let [weatherData, updateWeather] = useState({})
    let [weatherIcon, updateIcon] = useState("")
    let requestConfig = {
        city: "Nur-Sultan",
        lang: "ru",
    }
    useEffect(() => {
        weather.current(requestConfig).then((response) => {
            updateWeather({ ...response })
            updateIcon(weather.getIcon(response.weather[0].icon))
        })
        // eslint-disable-next-line
    }, [])
    if (weatherIcon)
        return (
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h2">
                            {+weatherData.main.temp.toFixed()}&deg;
                        </Typography>
                        <div className={classes.stat}>
                            <p>Влажность {weatherData.main.humidity}%</p>
                            <p>Ветер {weatherData.wind.speed} м/сек</p>
                        </div>
                    </CardContent>
                </div>
                <div className={classes.cover}>
                    <CardMedia
                        className={classes.icon}
                        image={weatherIcon}
                        title="weather icon"
                    />
                    <p> {weatherData.weather[0].description}</p>
                </div>
            </Card>
        )
    return <CircularProgress />
}
