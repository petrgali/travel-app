import { UPDATE_USER } from "../types"

const initialState = {
    username: null,
    avatar: null,
    isLoading: true,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
