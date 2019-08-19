import fakeData from "../fakeData";

class Cart {
    getCartName(){
        return 'emaJohn/carts/user-234';
    }
    countItem() {
        let cart = this.getCart();
        let total = 0;
        if (cart) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].qty;
            }
        }
        return total;
    }

    totalBeforeTax(cart) {

        let beforeTax = 0;
        if(cart){
            cart.filter((item) => {
                beforeTax += (item.price) * item.qty;
            })
        }
        return Math.floor(beforeTax);
    }

    getTax(cart) {

        let tax = 0;
        if(cart){
            cart.filter((item) => {
                tax += Math.round(((item.price + item.shipping) * item.qty) * 0.1);
            })
        }
        return Math.floor(tax);

    }

    getTotal(cart) {

        let total = 0;
        if(cart){
            cart.filter((item) => {
                total += Math.round((item.price + item.shipping) * item.qty);
            })
        }
        return Math.floor(total);
    }

    getShippingPrice(cart) {

        let price = 0;
        if(cart){
            cart.filter((item) => {
                price += (item.shipping) * item.qty;
            })
        }
        return Math.floor(price);

    }

    getSubtotal(cart) {


        let beforeTax = 0;
        if(cart){
            cart.filter((item) => {
                beforeTax += (item.price) * item.qty;
            })
        }
        return Math.floor(beforeTax);

    }

    getCart() {
        let name = this.getCartName();
        let cart = JSON.parse(localStorage.getItem(name))
        return cart;
    }

    setCart(cart) {
        let name = this.getCartName();
        localStorage.setItem(name, JSON.stringify(cart))
    }

    getCartItems(updatedCart) {
        let cartItems = [];
        let cartKeys = [];
        let cartQty = [];
        if(updatedCart){
            updatedCart = updatedCart.cart.items.forEach((el) => {
                cartKeys.push(el.key);
                cartQty.push(el.qty);
            });
        }

        fakeData.forEach((el) => {
            if (cartKeys.includes(el.key)) {
                cartItems.push(el)
            }
        })
        return cartItems;
    }

    clearCart(){
        let name = this.getCartName();
        localStorage.removeItem(name);
    }

}

export default Cart;
