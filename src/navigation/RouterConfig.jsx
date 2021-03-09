import { Switch, Route } from "react-router-dom"
import { COUNTRY, ROOT } from "./CONSTANTS"
import { NotFound } from "./NotFound"
import Home from "../pages/Home/Home"
import Country from "../pages/Country/Country."

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                {/*Public route example*/}
                <Route exact path={ROOT} component={Home} />
                <Route exact path={COUNTRY} component={Country} />
                {/*generic 404 route*/}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}