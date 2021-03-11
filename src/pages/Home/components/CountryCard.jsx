import React from "react"
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
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
            opacity: "0.6",
        },
    },
}))

function CountryCard({ t }) {
    const classes = useStyles()

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Страна
                                    </Typography>
                                    <Typography>
                                        О стране, тут обязательно должен
                                        побывать каждый
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardAction}>
                                    <Button size="small" color="primary">
                                        Посмотреть
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default withNamespaces()(CountryCard)
