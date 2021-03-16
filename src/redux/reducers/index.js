import { combineReducers } from "redux"
import { countryReducer } from "./countryReducer"
import { userReducer } from "./userReducer"
import { searchReducer } from "./searchReducer"
import { countryDetailReducer } from "./countryDetailReducer"

export const rootReducer = combineReducers({
    user: userReducer,
    country: countryReducer,
    search: searchReducer,
    countryDetail: countryDetailReducer,
})

export default rootReducer
