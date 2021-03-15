import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles({
    root: {
        display: "flex",
        height: "fit-content",
        // eslint-disable-next-line
        ["@media (max-width:780px)"]: {
            flexDirection: "column",
        },
    },
    main: {
        padding: "3rem",
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        minWidth: "30%",
        minHeight: "10rem",
    },
})

export const CountryDetail = ({ country, isLoading }) => {
    const classes = useStyles()

    return (
        <div>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <div className={classes.main}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.cover}
                            image={country.imageUrl}
                            title={country.name}
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <h2>{country.name}</h2>
                                <p>{country.description}</p>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}
export default CountryDetail
