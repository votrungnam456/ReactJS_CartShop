import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import * as Message from '../constants/Message'
import CartResult from '../components/CartResult'
import * as actions from '../actions/index'

class CartContainer extends Component {
    render() {
        let {cart} = this.props;
        // console.log(cart)
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotal(cart)}
            </Cart>
        )
    }
    showCartItem(cart){
        let {onDeleteCartProduct,onChangeMessage,onChangeQuanlity} = this.props
        let result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if(cart.length > 0){
            result = cart.map((cart,key) =>{
                return <CartItem 
                            key={key} 
                            productCart={cart}
                            index={key}
                            totalPriceSub={this.totalPriceSub}
                            onDeleteCartProduct={onDeleteCartProduct}
                            onChangeMessage={onChangeMessage}
                            onChangeQuanlity={onChangeQuanlity}
                        ></CartItem>
            })
        }
        return result;
    }
    totalPriceSub = (cartProduct) =>{
        return cartProduct.product.price * cartProduct.quanlity;
    }
    showTotal = (cart) => {
        let {onBuyingSuccess,onChangeMessage} = this.props
        let result = null;
        let totalPrice = this.totalPrice(cart);
        if(cart.length > 0){
            result = <CartResult 
            totalPrice={totalPrice}
            onBuyingSuccess={onBuyingSuccess}
            onChangeMessage={onChangeMessage}
            ></CartResult>
        }
        return result
    }
    totalPrice = (cart) => {
        let total = 0
        cart.forEach(product => {
            total += (product.product.price*product.quanlity)
        });
        return total
    }
}


const mapStateToProps = (state)=>{
    return{
        cart:state.cart
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        onDeleteCartProduct : (id) =>{
            dispatch(actions.deleteProduct(id))
        },
        onChangeMessage:(message) =>{
            dispatch(actions.changeMessage(message))
        },
        onChangeQuanlity : (product,value) =>{
            dispatch(actions.changeQuanlity(product,value))
        },
        onBuyingSuccess : () =>{
            dispatch(actions.buyingSuccess())
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);