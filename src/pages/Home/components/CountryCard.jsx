import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
       paddingTop:"70%",
    },
    cardContent: {
        flexGrow: 1,
        backgroundColor: "white",
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
   cardAction: {
        backgroundColor: "hsl(0, 0%, 67%)"
    },
    hover: {
        '&:hover': {
            opacity: "0.6"
        }
    }

}));

export default function CountryCard(props) {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {props.countries.map((country, idx) => {
                    return (
                        <Grid item key={idx}
                            xs={12} sm={6} md={4}
                            className={classes.hover}>
                            <Card className={classes.card} >
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={country.previewURL}
                                    title="Image Title"
                                >
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            {country.name}
                                        </Typography>
                                        <Typography>
                                            {country.capital} тут обязательно должен побывать каждый
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.cardAction}>
                                        <Button size="small" color="primary">
                                            Посмотреть
                                        </Button>
                                    </CardActions>
                                </CardMedia>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}
