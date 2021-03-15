import { combineReducers } from "redux"
import { userReducer } from "./userReducer"
import { localeReducer } from "./localeReducer"

export const rootReducer = combineReducers({
    user: userReducer,
    locale: localeReducer,
})