import { UPDATE_COUNTRY_DETAIL } from "../types"

const initialState = {
    countryDetail: "",
    isLoading: true,
}

export const countryDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COUNTRY_DETAIL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
