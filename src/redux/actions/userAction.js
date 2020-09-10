import { ADD_USER, DELETE_USER } from './types'

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}

export const deleteUser = (user) => {
    return {
        type: DELETE_USER,
        payload: user,
    }
}
