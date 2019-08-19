import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCountItem} from './../../../store/actions/cartAction'
class MenuCart extends Component {
    
    componentDidMount(){
        this.props.getCountTotal()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
     
    }
      
    render() {
        return (
            <Link to="/review">
                <span className="cart-count">{ this.props.countTotal }</span>
            </Link>                
            )
    }
}

function mapDispatchToProps (dispatch){
    return {
        getCountTotal: (data) => dispatch(getCountItem())
    }
}
const mapStateToProps = state => ({
    countTotal:state.cart.countItem
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuCart)
