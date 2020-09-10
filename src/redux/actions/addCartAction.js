import { ADD_TO_CART } from './types'

export const addItemToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    }
}
