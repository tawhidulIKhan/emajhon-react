import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './../partials/CartItem/CartItem'
import Cart from './../partials/Cart/Cart'
import './OrderReview.css'

class OrderReview extends Component {

    render() {
        let itemSection = this.props.products.map(item => <CartItem key={item.key} item={item}></CartItem>)

        return (
            <div>
            <div className="review-container">
                <div className="item-container">
                    {itemSection}
                </div>
                <div className="cart-container">
                    <Cart></Cart>
                </div>
            </div>
        </div>
        )
    }
}
 
const mapStateToProps = state => {
    if(state.cart.items){
        return {products:state.cart.items}
    }else{

        return {products:[]}
    }
    
}


export default connect(mapStateToProps)(OrderReview)
