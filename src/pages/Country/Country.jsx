import React, { useEffect } from "react"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

import { useSelector, useDispatch } from "react-redux"
import { updateCountryDetail } from "../../redux/actions/countryDetailActions"

import getCountryDetail from "../../services/getCountryDetail"

const useStyles = makeStyles({
    root: {
        display: "flex",
        height: "fit-content",
        ["@media (max-width:780px)"]: {
            // eslint-disable-line no-useless-computed-key
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

export function Country(props) {
    const id = props.match.params.id
    const classes = useStyles()

    const dispatch = useDispatch()
    const country = useSelector((state) => state.countryDetail.countryDetail)
    console.log(country)
    useEffect(() => {
        const _getCountryDetail = async () => {
            const res = await getCountryDetail(id)
            if (res) dispatch(updateCountryDetail(res))
        }
        _getCountryDetail()
    }, [dispatch, id])

    return (
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
    )
}

export default Country
