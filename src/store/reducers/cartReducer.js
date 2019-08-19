import { SET_CART, FETCH_CART, FETCH_COUNT_ITEM, REMOVE_CART_ITEM,CLEAR_CART } from './../actions/types'
import Cart from './../../helpers/CartHandler'
const cartItems = Cart.getCart() ? Cart.getCart() : []

const initialState = {
        items: cartItems,
        countItem:Cart.countItem(),
        totalBeforeTax:Cart.totalBeforeTax(cartItems),
        tax:Cart.getTax(cartItems),
        total:Cart.getTotal(cartItems),
        shippingPrice:Cart.getShippingPrice(cartItems),
        subTotal:Cart.getSubtotal(cartItems)
}


export default function(state = initialState, action){
    switch(action.type){
        case FETCH_CART:
            return {
                ...state,
                cart:action.payload
            }
            case SET_CART:
                    return {
                        ...state,
                        cart:action.payload
                    }
                    case REMOVE_CART_ITEM:
                        return {
                            ...state,
                            cart:action.payload
                        }
                        case CLEAR_CART:
                            return action.payload
                            case FETCH_COUNT_ITEM:
                            return {
                                ...state,
                                countItem:action.payload
                            }
                                default:
               return state
    }
}