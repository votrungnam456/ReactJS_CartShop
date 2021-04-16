import React, { Component } from 'react'
import { connect } from 'react-redux'
import Products from './../components/Products'
import Product from './../components/ProductItem'
// import PropTypes from 'prop-types';
import * as actions from '../actions/index'


class ProductsContainer extends Component {
    render() {
        let {products} = this.props
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products){
        let result = null;
        let {onAddToCart, onMessageAddSuccess} = this.props
        if(products.length > 0){
            result = products.map((product,key) =>{
                let resultRating = this.showRating(product.rating);
                return <Product key={key} product={product} rating={resultRating} onAddToCart={onAddToCart} onMessageAddSuccess={onMessageAddSuccess}>

                </Product>
            })
        }
        return result;
    }
    showRating(rating){
        let result = []
        for(let i = 1 ; i <= rating ; i++){
            result.push(<i key={i} className="fa fa-star" />)
        }
        for(let j = 1 ; j <= 5-rating ; j++){
            result.push(<i key={j+5} className="fa fa-star-o" />)
        }
        return result
    }
}
//chỉ giành cho khi dev để dễ debug
// ProductsContainer.propTypes = {
//     products:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             name:
//         })
//     ).isRequired
// } 

const mapStateToProps = (state)=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        onAddToCart : (product) =>{
            dispatch(actions.addToCart(product,1))
        },
        onMessageAddSuccess:(message) =>{
            dispatch(actions.changeMessage(message))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductsContainer);