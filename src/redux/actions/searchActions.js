import { UPDATE_SEARCH } from "../types"

export const updateSearch = (data) => ({
    type: UPDATE_SEARCH,
    payload: data,
})
