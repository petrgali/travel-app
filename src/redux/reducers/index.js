import { combineReducers } from "redux"
import { countryReducer } from "./countryReducer"
import { userReducer } from "./userReducer"
import { countryDetailReducer } from "./countryDetailReducer"

export const rootReducer = combineReducers({
    user: userReducer,
    country: countryReducer,
    countryDetail: countryDetailReducer,
})

export default rootReducer
