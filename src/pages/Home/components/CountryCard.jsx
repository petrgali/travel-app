import React from "react"
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { withNamespaces } from "react-i18next"

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 150,
    },
    cardContent: {
        flexGrow: 1,
        backgroundColor: "white",
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
    hover: {
        "&:hover": {
            transition: "transform .2s ease-in-out",
            cursor: "pointer",
            transform: "translateY(-3%)",
        },
    },
}))

function CountryCard({ t }) {
    const classes = useStyles()

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleClick = () => {
        alert("Clicked")
    }

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <h1>{t("Welcome")}</h1>
            <Grid container spacing={4}>
                {cards.map((card, index) => {
                    return (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            className={classes.hover}
                        >
                            <Card
                                className={classes.card}
                                onClick={handleClick}
                            >
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <h5>Страна</h5>
                                    <p>
                                        О стране, тут обязательно должен
                                        побывать каждый
                                    </p>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default withNamespaces()(CountryCard)
