import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setCart } from '../../../../store/actions/cartAction'
import './ShopItem.css'

class ShopItem extends Component {


    render() {
        const addToCart = (item) => {
            this.props.setCart(item)
        }
        const item = this.props.item
        return (
            <div className="item">
                <div>
                    <img src={item.img} alt=""/>
                </div>
                <div>
                    <h4 className="item-header">{item.name}</h4>
                    <p><small>by: {item.seller}</small></p>
                    <div className="item-description">
                    <div>
                            <p>${item.price}</p>
                            <p><small>only {item.stock} left in stock - order soon</small></p>
                            <button onClick={() => addToCart(item)}>
                                <i className="fa fa-shopping-cart"></i>
                                <span>add to cart</span>
                            </button>
                    </div>
                    <div>
                            <h4>Features</h4>
                            <ul>
                            {item.features.map(ftr => <li key={ftr.description}>{ftr.description}: <strong>{ftr.value}</strong> </li> )}                            </ul>    
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
      setCart: (data) => dispatch(setCart(data))
    }
  }
 
export default connect(null,mapDispatchToProps)(ShopItem)
