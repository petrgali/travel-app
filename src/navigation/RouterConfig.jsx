import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import { NotFound } from "./NotFound"
import { ROOT, COUNTRY } from "./CONSTANTS"
import Header from "../components/Header/Header"
import Country from "../pages/Country/Country"

export const RouterConfig = () => {
    return (
      <>
        <Header />
        <Switch>
            {/*Public route example*/}
            <Route exact path={ROOT} component={Home} />
            <Route path={COUNTRY} component={Country} />
            {/*generic 404 route*/}
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
      </>
    )
}
