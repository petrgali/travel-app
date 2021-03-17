import { useEffect } from "react"
import CountryCard from "./components/CountryCard"
import { useSelector, useDispatch } from "react-redux"
import { updateCountries } from "../../redux/actions/countryActions"
import getCountries from "../../services/getCountries"
import i18next from "i18next"
import { updateLocale } from "../../redux/actions/localeAction"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    home: {
        marginTop: 80,
        overflow: "hidden",
        [theme.breakpoints.down("xs")]: {
            marginTop: 145,
        },
    },
}))

export default function Home() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const lang = useSelector((state) => state.locale)

    useEffect(() => {
        const _getCountries = async (lang) => {
            const res = await getCountries(lang.locale)
            if (res) dispatch(updateCountries(res))
        }
        if (lang.locale) _getCountries(lang)
        // eslint-disable-next-line
    }, [lang])
    useEffect(() => {
        dispatch(updateLocale(i18next.language))
    }, [dispatch])
    return (

        <div className={classes.home}>
            <CountryCard />
        </div>
    )
}
