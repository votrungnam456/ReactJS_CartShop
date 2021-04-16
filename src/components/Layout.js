import React, { Component } from 'react'
import Header from './Header'

import MessageContainer from '../containers/MessageContainer'
import CartContainer from '../containers/CartContainers'
import Footer from './Footer'
import ProductsContainer from './../containers/ProductsContainers'
export default class layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        {/* Products */}
                        <ProductsContainer></ProductsContainer>
                        {/* Message */}
                        <MessageContainer></MessageContainer>
                        {/* Cart */}
                        <CartContainer></CartContainer>
                    </div>
                </main>
                <Footer></Footer>
            </div>

        )
    }
}
