import React, { Component } from 'react'
import Success from './giphy.gif'
import {connect} from 'react-redux'
import { clearCart } from '../../../store/actions/cartAction'
import Cart from './../../../helpers/CartHandler'

class PlaceOrder extends Component {
    componentDidMount() {
        this.props.clearCart()
    }
    render() {
        return (
            <div>
                <img src={Success} />
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        clearCart: () => dispatch(clearCart())
    }
  }
 
export default connect(null,mapDispatchToProps)(PlaceOrder)
