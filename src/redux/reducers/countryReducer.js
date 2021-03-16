import { UPDATE_COUNTRIES } from "../types"

const initialState = {
    countries: [],
    isLoading: true,
}

export function countryReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                isLoading: false,
            }
        default:
            return state
    }
}

export default countryReducer
