import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import Logo from "./source/rs_school_js.svg"

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#3F6DF6",
        width: "100%",
        marginTop: "5rem",
        justifyContent: "center",
        display: "flex",
    },
    link: {
        color: "white",
        margin: theme.spacing(1),
    },
    logo: {
        color: "white",
    },
    row: {
        color: "white",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "fit-content",
        alignItems: "center",
    },
    names: {
        margin: 0,
        textDecoration: "underline",
        display: "flex",
        justifyContent: "center",
    },
}))

function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <div className={classes.column}>
                <div className={classes.row}>
                    <p>Made with 🖤 by: </p>
                </div>
                <div className={classes.row}>
                    <p className={classes.names}>
                        <Link
                            className={classes.link}
                            href="https://github.com/Adilyam"
                            target="_blank"
                        >
                            Adilyam
                        </Link>
                        <Link
                            className={classes.link}
                            href="https://github.com/petrgali"
                            target="_blank"
                        >
                            Oleg
                        </Link>
                        <Link
                            className={classes.link}
                            href="https://github.com/enthusiast17"
                            target="_blank"
                        >
                            Ulan Nurym
                        </Link>
                        <Link
                            className={classes.link}
                            href="https://github.com/Alibek-tse"
                            target="_blank"
                        >
                            Alibek
                        </Link>
                    </p>
                </div>
                <div className={classes.row}>
                    <Link
                        className={classes.logo}
                        href="https://rs.school/js/"
                        target="_blank"
                    >
                        <p>
                            2021 <img src={Logo} alt="" width={50} />{" "}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
