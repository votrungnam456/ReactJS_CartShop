import React, { Component } from 'react'
import * as message from '../constants/Message'

export default class CartItem extends Component {

    render() {
        let {productCart, totalPriceSub} = this.props
        let PriceSub = totalPriceSub(productCart)
        
         return (
                <tr>
                    <th scope="row">
                        <img alt={productCart.product.name} src={productCart.product.image}/>
                    </th>
                    <td>
                        <h5>
                            <strong>{productCart.product.name}</strong>
                        </h5>
                    </td>
                    <td>{productCart.product.price}$</td>
                    <td className="center-on-small-only">
                        <span className="qty">{productCart.quanlity}</span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label onClick={()=>this.changeQuanlity(productCart.product,-1)} className="btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light">
                                <a>—</a>
                            </label>
                            <label onClick={()=>this.changeQuanlity(productCart.product,1)} className="btn btn-sm btn-primary
                                              btn-rounded waves-effect waves-light">
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>{PriceSub}</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="true" data-original-title="Remove item"
                            onClick={()=>this.onDeleteCartProduct(productCart.product.id)}
                        >
                            X
                        </button>
                    </td>
                </tr>

        )
    }
    onDeleteCartProduct = (id)=>{
        this.props.onDeleteCartProduct(id)
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    changeQuanlity = (product,value)=>{
        this.props.onChangeQuanlity(product,value)
        this.props.onChangeMessage(message.MSG_UPDATE_CART_SUCCESS)
    }
}
