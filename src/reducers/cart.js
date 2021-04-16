import * as types from '../constants/ActionTypes'
import Lodash from 'lodash'

let data = JSON.parse(localStorage.getItem('cart'))

let initialState = data ? data : []

let findIndex = (id,state) =>{

    let index = Lodash.findIndex(state, (product)=>{
        return product.product.id === id
    })
    
    return index;
}
const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            let index = findIndex(action.product.id, state)
            if(index !== -1){
                state[index].quanlity += 1;
            }
            else{
                let newProduct = {
                    product:action.product,
                    quanlity:action.quanlity
                }
                state.push(newProduct)
                localStorage.setItem('cart',JSON.stringify(state))
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state]
        }
        case types.DELETE_PRODUCT:{
            let index = findIndex(action.id,state)
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state]
        }
        case types.CHANGE_QUANLITY:{
            let index = findIndex(action.product.id,state)
            if(state[index].quanlity === 1 && action.value === -1){
                state.splice(index,1);
            }
            else{
                state[index].quanlity += action.value
            }
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state]
        }
        case types.BUYING_SUCCESS:{
            state = [];
            localStorage.setItem('cart',JSON.stringify(state))
            return [...state]
        }
        default:
            return state
    }
}

export default cart