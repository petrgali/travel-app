
/* Router */
import { BrowserRouter } from "react-router-dom"
import { RouterConfig } from "./navigation/RouterConfig"

/* Redux */
import { Provider } from "react-redux"
import { store } from "./redux/store"

export const App = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <RouterConfig />
                </BrowserRouter>
            </Provider>
        </div>
    )
}
export default App