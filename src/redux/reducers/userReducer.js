import { ADD_USER, DELETE_USER } from '../actions/types'

const initialState = {
    user: null,
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                user: payload,
            }
        case DELETE_USER:
            return {
                ...state,
                user: null,
            }

        default:
            return state
    }
}
