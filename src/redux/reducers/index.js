import { combineReducers } from "redux"
import { countryReducer } from "./countryReducer"
import { userReducer } from "./userReducer"
import { searchReducer } from "./searchReducer"
import { localeReducer } from "./localeReducer"
import { countryDetailReducer } from "./countryDetailReducer"

export const rootReducer = combineReducers({
    locale: localeReducer,
    user: userReducer,
    country: countryReducer,
    search: searchReducer,
    countryDetail: countryDetailReducer,
})

export default rootReducer
