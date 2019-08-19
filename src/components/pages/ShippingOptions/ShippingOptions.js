import React, { Component } from 'react'
import './ShippingOptions.css'

export default class ShippingOptions extends Component {
    render() {
        let option = this.props.option
        return (
            <div>
            <input type="radio" value={option.price} checked={option.price === this.props.shipping} readOnly/>
                <span className="a-radio-label">
                <span className="delivery-option"><strong>{option.days} business days</strong></span>
                <br/>
                    <span className="secondary-text">${option.price} - {option.type} Shipping</span>
                </span>
        </div>
                )
    }
}
