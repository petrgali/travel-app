import { combineReducers } from "redux"
import { countryReducer } from "./countryReducer"
import { userReducer } from "./userReducer"
import { localeReducer } from "./localeReducer"
import { countryDetailReducer } from "./countryDetailReducer"

export const rootReducer = combineReducers({
    locale: localeReducer,
    user: userReducer,
    country: countryReducer,
    countryDetail: countryDetailReducer,
})

export default rootReducer
