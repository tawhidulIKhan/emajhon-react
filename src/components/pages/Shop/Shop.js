import React, { Component } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {featchProducts, searchProducts} from './../../../store/actions/productAction'
import ShopItem from './../partials/ShopItem/ShopItem'
import Cart from './../partials/Cart/Cart'
import MenuCart from './../../partials/MenuCart/MenuCart'
import store from './../../../store/index'
import './Shop.css'

class Shop extends Component {

        constructor(){
            super();
            this.handleSearch = this.handleSearch.bind(this)
        }
        componentDidMount() {
            this.props.featchProductsItems()
        }

        handleSearch(e){

            var txt = e.target.value
            this.props.searchProductsItems(txt)

        }

        render() {
            var products = this.props.products.products.slice(0,10)

            return (
            <div>
                <div className="search-container">
                    <input type="text" className="search-input" onKeyUp={this.handleSearch} placeholder="type here to search" />
                    <MenuCart></MenuCart>
                </div>
                <div className="shop-container">
                    <div className="items-container">
                        {products.map(item => <ShopItem key={item.key} item={item}></ShopItem> )}
                    </div>
                    <div className="cart-container">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        )
    }
}

  function mapDispatchToProps (dispatch) {
    return {
      featchProductsItems: (data) => dispatch(featchProducts()),
      searchProductsItems: (data) => dispatch(searchProducts(data))
    }
  }
 
const mapStateToProps = state => ({
    products:state.products
})


export default connect(mapStateToProps, mapDispatchToProps)(Shop)