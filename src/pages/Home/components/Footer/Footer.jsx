import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import Logo from "./source/rs_school_js.svg"

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "blue",
        position: "fixed",
        padding: "20px",
        left: "0",
        bottom: "0",
        height: "40px",
        width: "100%",
    },
    link: {
        color: "white",
        margin: theme.spacing(2)
        
    },
    logo: {
        marginLeft: theme.spacing(140),
        color:"white"
    }
  }));


function Footer() {
    const classes = useStyles();
    return (
        <Typography className={classes.footer} xs={12} sm={6} md={4}>
            <Link className={classes.link} href="https://github.com/Adilyam" target="_blank">Adilyam</Link>
            <Link className={classes.link} href="https://github.com/petrgali" target="_blank">Oleg</Link>
            <Link className={classes.link} href="https://github.com/enthusiast17" target="_blank">Ulan Nurym</Link>
            <Link className={classes.link} href="https://github.com/Alibek-tse" target="_blank">Alibek</Link>
            <Link className={classes.logo} href="https://rs.school/js/" target="_blank">2021 <img src={Logo} alt="" width={50}/></Link>        
            
        </Typography>
    )
}

export default Footer