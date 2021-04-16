import React, { Component } from 'react'
import * as message from '../constants/Message'

export default class CartResult extends Component {
    render() {
        let {totalPrice} = this.props
        // console.log(totalPrice)
        return (
                <tr>
                    <td colSpan={3} />
                    <td>
                        <h4>
                            <strong>Tổng Tiền</strong>
                        </h4>
                    </td>
                    <td>
                        <h4>
                            <strong>{totalPrice}$</strong>
                        </h4>
                    </td>
                    <td colSpan={3}>
                        <button onClick={this.buyingSuccess} type="button" className="btn btn-primary waves-effect waves-light">Hoàn tất mua bán
                    <i className="fa fa-angle-right right" />
                        </button>
                    </td>
                </tr>

        )
    }
    buyingSuccess = () =>{
        this.props.onBuyingSuccess();
        this.props.onChangeMessage(message.MSG_BUYING_SUCCESS)
    }
}
