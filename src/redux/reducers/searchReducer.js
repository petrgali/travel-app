import { UPDATE_SEARCH } from "../types"

const initialState = {
    search: "",
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        default:
            return state
    }
}

export default searchReducer
