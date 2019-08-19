import { FETCH_PRODUCTS, SEARCH_PRODUCTS,FETCH_SHIPPING_OPTIONS } from './../actions/types'

const initialState = {
    products:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }
            case SEARCH_PRODUCTS:
                return {
                    ...state,
                    products:action.payload
                }
                default:
               return state
    }
}