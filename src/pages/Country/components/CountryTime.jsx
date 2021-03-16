import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import i18next from "i18next"
import { updateLocale } from "../../../redux/actions/localeAction"
import {
    makeStyles,
    Card,
    CardContent
} from "@material-ui/core"

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#ffd53d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 350,
    },
    content: {
        transform: "scale(1.2)"
    }
}))

const CapitalizeFirstLetter = (string) => string
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")


export default function CountryTime() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const lang = useSelector(state => state.locale)
    let [date, updateDate] = useState(new Date())
    let code = "Asia/Tokyo"

    useEffect(() => {
        dispatch(updateLocale(i18next.language))
    }, [dispatch])
    useEffect(() => {
        let interval = setTimeout(() => {
            updateDate(new Date())
            return () => clearTimeout(interval)
        }, 1000)
    }, [date])
    return (
        <>
            {!!lang.locale && <Card className={classes.root}>
                <CardContent className={classes.content}>
                    {date.toLocaleString(lang.locale, {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZone: code
                    })} - {CapitalizeFirstLetter(date.toLocaleString(lang.locale, {
                        weekday: "long",
                        timeZone: code
                    }))}, {CapitalizeFirstLetter(date.toLocaleString(lang.locale, {
                        month: "long",
                        day: "2-digit",
                        timeZone: code
                    }))}
                </CardContent>
            </Card>}
        </>
    )
}