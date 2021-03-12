import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"avenir next"',
            "avenir",
            '"helvetica neue"',
            "helvetica",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        htmlFontSize: "1rem",
    },
    shadows: ["none"],
});

export default theme;
