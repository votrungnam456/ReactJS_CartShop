import React, { Component } from 'react'
import * as messages from '../constants/Message'


class ProductItem extends Component {
    render() {
        let {product, rating} = this.props;
        return (
                <div className="col-lg-4 col-md-6 mb-r">
                    <div className="card text-center card-cascade narrower">
                        <div className="view overlay hm-white-slight z-depth-1">
                            <img src={product.image} />
                            <a>
                                <div className="mask waves-light waves-effect waves-light" />
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">
                                <strong>
                                    <a>{product.name}</a>
                                </strong>
                            </h4>
                            <ul className="rating">
                                <li>{rating}</li>
                            </ul>
                            <p className="card-text">
                                {product.description}
                                    </p>
                            <div className="card-footer">
                                <span className="left">{product.price}$</span>
                                <span className="right">
                                    <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="true" data-original-title="Add to Cart"
                                        onClick={()=>this.onAddToCart(product)}    
                                    >
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
    onAddToCart = (product) =>{
        this.props.onAddToCart(product);
        this.props.onMessageAddSuccess(messages.MSG_ADD_TO_CART_SUCCESS)
    }
}

export default ProductItem