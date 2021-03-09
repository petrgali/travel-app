/* Router */
import { BrowserRouter } from "react-router-dom"
import { RouterConfig } from "./navigation/RouterConfig"

/* Redux */
import { Provider } from "react-redux"
import { store } from "./redux/store"

/* Material */
import theme from "./styles/theme"
import { ThemeProvider } from "@material-ui/core/styles"
import "./styles/styles.css"

export const App = () => {
    return (
        <div>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <RouterConfig />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </div>
    )
}
export default App
