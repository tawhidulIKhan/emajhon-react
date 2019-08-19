import React, { Component } from 'react'
import {connect} from 'react-redux'
import {removeCartItem} from './../../../../store/actions/cartAction'
import ShippingOptions from './../../ShippingOptions/ShippingOptions'
import ShippingCosts from './../../../../fakeData/shippingCosts'
import './CartItem.css'

class CartItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.item
        let shippingOptions = ShippingCosts;
   
        return (
            <div className="cart-item">
            <h4>{item.name}</h4>
            <div className="cart-item-container">
                <div className="cart-item-description">
                    <p className="price">${item.price}</p>
                    <p><small>sold by:{item.seller}</small></p>
                    <p>Quantity:{item.qty}</p>
                    <button onClick={() => this.props.removeCartItem(item)}>Remove</button>
                </div>
                <div className="shipping-options">
                    <h5>Shipping options</h5>
                    {shippingOptions.map(option => <ShippingOptions key={option.type} option={option} shipping={item.shipping}></ShippingOptions> )}
                </div>
            </div>
        </div>        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        removeCartItem: (data) => dispatch(removeCartItem(data))
    }
  }

export default connect(null, mapDispatchToProps)(CartItem)