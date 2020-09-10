import { ADD_TO_CART } from '../actions/types'

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
                item: payload.item,
                number: state.items.length + 1,
            }

        default:
            return state
    }
}
