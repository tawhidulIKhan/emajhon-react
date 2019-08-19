import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import './Cart.css'

class Cart extends Component {
    render() {

        const cart = this.props.cart
        let CartSummary
        if(this.props.location.pathname == '/review'){
            CartSummary = <Link to="/place-order"><button><span>Place your order</span></button></Link>

        }else{
            CartSummary = <Link to="/review"><button><span>Review your order</span></button></Link>

        }
        return (
            <div className="cart">
            <h3>Order Summary</h3>
            <p>Items ordered:{cart.countItem}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${cart.subTotal}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${cart.shippingPrice}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${cart.totalBeforeTax}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${cart.tax}</td>
                    </tr>
                    <tr className="total-row">
                        <td>Order Total:</td>
                        <td>${cart.total}</td>
                    </tr>
                </tbody>
            </table>

            {CartSummary}
</div>
        )
    }
}

  const mapStateToProps = state => ({
    cart:state.cart
})
 
//const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

export default connect(mapStateToProps)(withRouter(Cart))
