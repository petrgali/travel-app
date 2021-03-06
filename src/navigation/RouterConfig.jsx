import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import { NotFound } from "./NotFound"
import { ROOT } from "./CONSTANTS"

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                {/*Public route example*/}
                <Route exact path={ROOT} component={Home} />
                {/*generic 404 route*/}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}