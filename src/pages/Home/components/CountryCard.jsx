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
        maxHeight: "8rem",
        overflow: "scroll",
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

function CountryCard({ t, countries, handleClick }) {
    const classes = useStyles()

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <h1>{t("Welcome")}</h1>
            <Grid container spacing={4}>
                {countries.map((card, index) => {
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
                                onClick={() => handleClick(card.nameEN, card.capitalEN)}
                            >
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.previewImageUrl}
                                />
                                <CardContent className={classes.cardContent}>
                                    <h5>{card.name}</h5>
                                    <p>{card.capital}</p>
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
