import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import i18next from "i18next"
import { updateLocale } from "../../../redux/actions/localeAction"
import { makeStyles, Card, Typography, CardContent } from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        width: 150
    },
    icon: {

    }
}))

export default function CountryTime() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const lang = useSelector(state => state.locale)
    let [date, updateDate] = useState(new Date())
    let code = "Asia/Almaty"

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
            <Card className={classes.root}>
                <CardContent></CardContent>
                <AccessTimeIcon />
               
                <Typography>
                    {date.toLocaleString(lang.locale, {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZone: code
                    })}
                </Typography>
            </Card>
            {!!lang.locale && <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "150px"
            }}>
                <div style={{ margin: "auto" }}>
                    {date.toLocaleString(lang.locale, {
                        month: "long",
                        day: "2-digit",
                        timeZone: code
                    })}
                </div>
                <div style={{ margin: "auto" }}>
                    {date.toLocaleString(lang.locale, {
                        weekday: "long",
                        timeZone: code
                    })}
                </div>
                <div style={{ margin: "auto" }}>
                    {date.toLocaleString(lang.locale, {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZone: code
                    })}
                </div>
            </div>}
        </>
    )
}