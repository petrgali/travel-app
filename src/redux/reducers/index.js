import { combineReducers } from "redux"
import { countryReducer } from "./countryReducer"
import { userReducer } from "./userReducer"
import { searchReducer } from "./searchReducer"

export const rootReducer = combineReducers({
    user: userReducer,
    country: countryReducer,
    search: searchReducer,
})

export default rootReducer
