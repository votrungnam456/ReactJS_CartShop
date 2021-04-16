import * as types from './../constants/ActionTypes'

export const addToCart = (product, quanlity) =>{
    return {
        type:types.ADD_TO_CART,
        product,
        quanlity
    }
}
export const changeMessage = (message) =>{
    return {
        type:types.CHANGE_MESSAGE,
        message
    }
}
export const deleteProduct = (id) =>{
    return {
        type:types.DELETE_PRODUCT,
        id
    }
}
export const changeQuanlity = (product, value) =>{
    return {
        type:types.CHANGE_QUANLITY,
        product,
        value
    }
}
export const buyingSuccess = () =>{
    return {
        type:types.BUYING_SUCCESS,
    }
}