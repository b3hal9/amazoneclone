import { ADD_TO_CART, DELETE_PRODUCT } from './types'

export const addItemToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,
    }
}

export const deleteFromCart = (product_id) => {
    return {
        type: DELETE_PRODUCT,
        payload: product_id,
    }
}
