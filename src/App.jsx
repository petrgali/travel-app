/* Router */
import { BrowserRouter } from "react-router-dom"
import { RouterConfig } from "./navigation/RouterConfig"

/* Redux */
import { useDispatch } from "react-redux"

/* Material */
import theme from "./styles/theme"
import { ThemeProvider } from "@material-ui/core/styles"
import "./styles/styles.css"
import { useEffect } from "react"
import { me } from "./services/auth"
import { updateUser } from "./redux/actions/userActions"

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        me()
            .then((user) => dispatch(updateUser({ ...user, isLoading: false })))
            .catch(() => dispatch(updateUser({ isLoading: false })))
    }, [dispatch])

    return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <RouterConfig />
          </BrowserRouter>
      </ThemeProvider>
    )
}
export default App
