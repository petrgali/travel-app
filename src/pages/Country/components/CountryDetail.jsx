import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
} from "@material-ui/core"
import { useSelector } from "react-redux"
import CountryRating from "./CountryRating"

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

export const CountryDetail = () => {
    const classes = useStyles()
    const country = useSelector((state) => state.countryDetail.countryDetail)
    return (
        <div>
            {country.isLoading ? (
                <CircularProgress />
            ) : (
                <div className={classes.main}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.cover}
                            image={country.previewImageUrl}
                            title={country.name}
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <h2>{country.name}</h2>
                                <h7>{country.capital}</h7>
                                <p>{country.description}</p>
                                <CountryRating
                                    nameEN={country.nameEN}
                                    capitalEN={country.capitalEN}
                                />
                            </CardContent>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}
export default CountryDetail
