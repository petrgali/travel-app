import { UPDATE_LOCALE } from "../actions/localeAction"

const initialState = {
    locale: ""
}

export const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOCALE:
            return {
                ...state,
                locale: action.payload
            }
        default:
            return state
    }
}