import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { makeStyles, Card, CardContent } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffd53d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "fit-content",
        background:
            "linear-gradient(90deg, rgba(252,223,138,1) 0%, rgba(243,131,129,1) 100%);",
    },
    content: {
        transform: "scale(1)",
    },
}))

const CapitalizeFirstLetter = (string) =>
    string
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")

export default function CountryTime({ TZcode }) {
    const classes = useStyles()
    const lang = useSelector((state) => state.locale)
    let [date, updateDate] = useState(new Date())

    useEffect(() => {
        let interval = setTimeout(() => {
            updateDate(new Date())
            return () => clearTimeout(interval)
        }, 1000)
    }, [date])
    let requestLanguage = ""
    lang.locale === "kz"
        ? (requestLanguage = "kaz")
        : (requestLanguage = lang.locale)
    return (
        <>
            {!!lang.locale && (
                <Card className={classes.root}>
                    <CardContent className={classes.content}>
                        {date.toLocaleString(requestLanguage, {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            timeZone: TZcode,
                        })}{" "}
                        -{" "}
                        {CapitalizeFirstLetter(
                            date.toLocaleString(requestLanguage, {
                                weekday: "long",
                                timeZone: TZcode,
                            })
                        )}
                        ,{" "}
                        {CapitalizeFirstLetter(
                            date.toLocaleString(requestLanguage, {
                                month: "long",
                                day: "2-digit",
                                timeZone: TZcode,
                            })
                        )}
                    </CardContent>
                </Card>
            )}
        </>
    )
}
