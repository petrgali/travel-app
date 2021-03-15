import { useEffect, useState } from "react"
import getWeather from "../../../services/getWeather"
import { makeStyles } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


const weather = getWeather()
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        height: 110,
        width: 150
    },
    icon: {
        width: 90,
        height: 90,
        margin: "auto"
    },
    description: {
        display: "flex",
        justifyContent: "center"
    },
    stat: {
        display: 'flex',
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
        lang: "ru"
    }
    useEffect(() => {
        weather.current(requestConfig)
            .then(response => {
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
                        <Typography component="h2" variant="h2">
                            {weatherData.name}
                        </Typography>

                        <Typography variant="h2">
                            {+weatherData.main.temp.toFixed()}&deg;
                        </Typography>
                        <div className={classes.stat}>
                            <Typography variant="subtitle2">
                                Влажность {weatherData.main.humidity}%
                        </Typography>
                            <Typography variant="subtitle2">
                                Ветер {weatherData.wind.speed} м/сек
                            </Typography>
                        </div>
                    </CardContent>
                </div>
                <div className={classes.cover}>
                    <CardMedia
                        className={classes.icon}
                        image={weatherIcon}
                        title="weather icon"
                    />
                    <Typography variant="subtitle1" className={classes.description}>
                        {weatherData.weather[0].description}
                    </Typography>
                </div>
            </Card >
        )
    return (
        <CircularProgress />
    )
}