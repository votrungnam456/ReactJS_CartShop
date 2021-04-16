import IP7 from './../img/iphone-7-plus.jpg'
import IP8 from './../img/iphone-8-plus.jpg'
import IP10 from './../img/iphone-10-plus.jpg'
// import * as types from '../constants/ActionTypes'
let initialState = [
    {
        id:1,
        name: 'IPHONE 7 PLUS',
        image: IP7,
        description: 'Do Apple sản xuất',
        price: 200,
        invetory: 10,
        rating :4
    },
    {
        id:2,
        name: 'IPHONE 8 PLUS',
        image: IP8,
        description: 'Do Apple sản xuất',
        price: 300,
        invetory: 10,
        rating :3
    },
    {
        id:3,
        name: 'IPHONE 10 PLUS',
        image: IP10,
        description: 'Do Apple sản xuất',
        price: 400,
        invetory: 10,
        rating :5
    },
]

const product = (state = initialState ,action) =>{
    switch (action.type) {

        default:
            return state
    }
}

export default product