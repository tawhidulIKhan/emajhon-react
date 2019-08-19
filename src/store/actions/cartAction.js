import {
     FETCH_CART,
     SET_CART,
     FETCH_COUNT_ITEM,
     REMOVE_CART_ITEM,
     CLEAR_CART
    } from './types'

import store from './../../store/index'

import Cart from './../../helpers/CartHandler'

const cartItems = Cart.getCart() ? Cart.getCart() : []

export const getCart = () => {
    
    let cart = Cart.getCartItems()
    
    return {
        type: FETCH_CART,payload:cart
    }
}

export const clearCart = () => {
    Cart.clearCart()

    let cart = {
        items: [],
        countItem:0,
        totalBeforeTax:0,
        tax:0,
        total:0,
        shippingPrice:0,
        subTotal:0
    }
    
    return {
        type: CLEAR_CART,payload:cart
    }
}


export const setCart = (data) => {
    let cart = Cart.add_to_cart(data)
    return {
        type: SET_CART,payload:cart
    }
}

export const getCountItem = () => {
    const countItem = store.getState().cart.countItem
    return {
        type: FETCH_COUNT_ITEM,payload:countItem
    }
}

export const removeCartItem = (data) => {
    let cart =  Cart.deleteItem(data.key);

    return {
        type: REMOVE_CART_ITEM,payload:cart
    }
}


