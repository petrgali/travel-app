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
    Avatar
} from "@material-ui/core"

const currency = getExchangeRates()
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        padding: theme.spacing(2)
    },
    avatar: {
        marginRight: theme.spacing(5)
    }

}))
function CurrencyWidget({ t }) {
    const classes = useStyles()
    let code = "KZT"
    let [rates, updateRates] = useState({})
    useEffect(() => {
        currency.getCurrentRate(code)
            .then(response => updateRates({ ...response.data.conversion_rates }))
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <List className={classes.root}
                subheader={
                    <ListSubheader component="div" id="subheader">
                        {t("Exchange rates")}
                    </ListSubheader>
                }>
                <ListItem>
                    <Avatar src="flags/US.png" variant="square" className={classes.avatar} />
                    <ListItemText
                        primary={(1 / rates.USD).toFixed(2)}
                        secondary={t("USD/KZT")} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <Avatar src="flags/EU.png" variant="square" className={classes.avatar} />
                    <ListItemText
                        className={classes.list}
                        primary={(1 / rates.EUR).toFixed(2)}
                        secondary={t("EUR/KZT")} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <Avatar src="flags/RU.png" variant="square" className={classes.avatar} />
                    <ListItemText
                        primary={(1 / rates.RUB).toFixed(2)}
                        secondary={t("RUB/KZT")} />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </>
    )
}
export default withNamespaces()(CurrencyWidget)