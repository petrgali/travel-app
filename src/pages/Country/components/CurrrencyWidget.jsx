import { useEffect, useState } from "react"
import { withNamespaces } from "react-i18next"
import getExchangeRates from "../../../services/getExchahgeRate"
import { makeStyles } from "@material-ui/core/styles"
import {
    ListItem,
    ListSubheader,
    Divider,
    List,
    ListItemText,
    Avatar,
    Card,
} from "@material-ui/core"

const currency = getExchangeRates()
const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 200,
        // padding: theme.spacing(4)
        width: "100%",
        minWidth: "300px",
        // marginRight: "3rem",
    },

    cardCurr: {
        width: "100%",
        marginRight: "3rem",
    },
    avatar: {
        // marginRight: theme.spacing(5)
    },
}))
function CurrencyWidget({ code, t }) {
    const classes = useStyles()
    let [rates, updateRates] = useState({})
    useEffect(() => {
        //    if (code) currency.getCurrentRate(code)
        //         .then(response => updateRates({ ...response.data.conversion_rates }))
        let res = { USD: 0.0054, EUR: 0.0078, RUB: 0.8 }
        updateRates({ ...res })

        // eslint-disable-next-line
    }, [code])
    return (
        <Card className="cardCurr">
            <List
                className={classes.root}
                subheader={
                    <ListSubheader component="div" id="subheader">
                        {t("Exchange rates")}
                    </ListSubheader>
                }
            >
                <ListItem>
                    <Avatar
                        src="/flags/US.png"
                        variant="square"
                        className={classes.avatar}
                    />
                    <ListItemText
                        primary={(1 / rates.USD).toFixed(2)}
                        secondary={t("USD/KZT")}
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <Avatar
                        src="/flags/EU.png"
                        variant="square"
                        className={classes.avatar}
                    />
                    <ListItemText
                        className={classes.list}
                        primary={(1 / rates.EUR).toFixed(2)}
                        secondary={t("EUR/KZT")}
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <Avatar
                        src="/flags/RU.png"
                        variant="square"
                        className={classes.avatar}
                    />
                    <ListItemText
                        primary={(1 / rates.RUB).toFixed(2)}
                        secondary={t("RUB/KZT")}
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Card>
    )
}
export default withNamespaces()(CurrencyWidget)
