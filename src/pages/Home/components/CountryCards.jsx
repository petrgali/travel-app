import { Link } from "react-router-dom"
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
        paddingTop: "70%",
    },
    cardContent: {
        flexGrow: 1,
        backgroundColor: "white",
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
    hover: {
        '&:hover': {
            opacity: "0.6",
        }
    }

}));

export default function CountryCards(props) {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {props.countries.map((country, idx) => {
                    return <InfoCard country={country} key={props.countries.length - idx} />
                })}
            </Grid>
        </Container>
    );
}

function InfoCard(props) {
    const classes = useStyles()
    return (
        <Grid item
            xs={12} sm={6} md={4}
            className={classes.hover}>
            <Card className={classes.card} >
                <CardMedia
                    className={classes.cardMedia}
                    image={props.country.previewURL}
                    title="Image Title">
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {props.country.name}
                        </Typography>
                        <Typography>
                            {props.country.capital} тут обязательно должен побывать каждый
                        </Typography>
                    </CardContent>
                    <CardActions style={{ backgroundColor: "hsl(0, 0%, 67%)" }}>
                        <Link to={`/countries/${props.country.name}`}>
                            <Button size="small" color="primary">
                                Посмотреть
                        </Button>
                        </Link>
                    </CardActions>
                </CardMedia>
            </Card>
        </Grid>
    )
}
