import {FETCH_PRODUCTS, SEARCH_PRODUCTS} from './types'
import Products from './../../fakeData/index'
import ShippingCosts from './../../fakeData/shippingCosts'
import store from './../../store'

export const featchProducts = () => ({
    type: FETCH_PRODUCTS,payload:Products
})


export const searchProducts = (txt) => {
    
    let matched =  store.getState().products.products.filter((item) => item.name.toLowerCase().includes(txt))
    let products = txt ? matched.slice(0,10) : Products.slice(0,10)
    return { type: SEARCH_PRODUCTS,payload:products}
}

