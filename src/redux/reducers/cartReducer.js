import { ADD_TO_CART, DELETE_PRODUCT } from '../actions/types'

const initialState = {
    items: [],
    item: {},
    number: null,
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, payload.item],
                number: state.items.length + 1,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== payload),
            }

        default:
            return state
    }
}
