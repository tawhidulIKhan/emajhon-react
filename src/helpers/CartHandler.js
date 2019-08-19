import Cart from './Cart';
import Store from './../store'

class CartHandler extends Cart{

    getCartName(){
        return 'emaJohn/carts/user-234';
    }
    add_to_cart(data){
        let cart = this.getCart()
        
        if(!cart){
         cart = [{
                'key': data.key,
                'name': data.name,
                'price': data.price,
                'shipping': data.shipping ? data.shipping : 0,
                'tax': data.tax ? data.tax : 0,
                'qty': 1
            }]
        this.setCart(cart)
        let updatedCart = this.getUpdatedCart(cart)
        return updatedCart;

        }

        let product = cart.filter((item) => {
            if(item.key === data.key){
                return item
            }
        });

        if(!product.length){
            cart.push({
                'key': data.key,
                'name': data.name,
                'price': data.price,
                'shipping': data.shipping ? data.shipping : 0,
                'tax': data.tax ? data.tax : 0,
                'qty': 1
            });

            this.setCart(cart)
            let updatedCart = this.getUpdatedCart(cart)
            return updatedCart;
    
        }
        cart = cart.map((item) => {

            if(item.key === product[0].key){
                    item.qty++
                }
                return item
            })

            this.setCart(cart)
            let updatedCart = this.getUpdatedCart(cart)
            return updatedCart;


    }

    getUpdatedCart(cart){

        let updatedCart = Store.getState().cart

            updatedCart.items = cart
            updatedCart.countItem++
            updatedCart.subTotal = this.getSubtotal(cart)
            updatedCart.totalBeforeTax = this.totalBeforeTax(cart)
            updatedCart.shippingPrice = this.getShippingPrice(cart)
            updatedCart.tax = this.getTax(cart)
            updatedCart.total = this.getTotal(cart)
            
            return updatedCart
    
        
    }



    deleteItem(key) {
        let cart = this.getCart();
        cart = cart.filter((el) => {
            if (el.key !== key) {
                return el;
            }
        })
        this.setCart(cart);
        
        let updatedCart = Store.getState().cart

        updatedCart.items = cart
        updatedCart.countItem = this.countItem()
        updatedCart.subTotal = this.getSubtotal(cart)
        updatedCart.totalBeforeTax = this.totalBeforeTax(cart)
        updatedCart.shippingPrice = this.getShippingPrice(cart)
        updatedCart.tax = this.getTax(cart)
        updatedCart.total = this.getTotal(cart)
        
        return updatedCart

    }

}

export default new CartHandler
