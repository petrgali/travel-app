import { useEffect, useState } from "react"
import getExchangeRates from "../../../utils/getExchahgeRate"
import { withNamespaces } from "react-i18next"
import { ListItem, Typography } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/core/styles"

const currency = getExchangeRates()
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 140,
    },
    avatar:{
        marginRight: theme.spacing(2)
    }
   
}))
function CurrencyWidget({ t }) {
    const classes = useStyles()
    let code = "KZT"
    let [rates, updateRates] = useState({})
    useEffect(() => {
        updateRates({ ...currency.getCurrentRate(code) })
        // .then(response => response.data.conversion_rates)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {t("Exchange rates")}
            <List className={classes.root}>
                <ListItem>
                    <Avatar src="flags/US.png" variant="square" className={classes.avatar}/>
                    <ListItemText
                        primary={(1 / rates.USD).toFixed(2)}
                        secondary={t("USD/KZT")} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <Avatar src="flags/EU.png" variant="square" className={classes.avatar}/>
                    <ListItemText
                    className={classes.list}
                        primary={(1 / rates.EUR).toFixed(2)}
                        secondary={t("EUR/KZT")} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <Avatar src="flags/RU.png" variant="square" className={classes.avatar}/>
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