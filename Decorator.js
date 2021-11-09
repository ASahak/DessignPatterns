class Phone {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getCart(){
        return 'Shipping for ' + this.name + ' is $' + this.price * 0.25;
    }
}
const phone = new Phone("Samsung", 200);

class CartDecorator {
    constructor(phone){
        this.cart = [...(this.cart || []), phone];
    }

    getCartItems(){
        this.cart.forEach(phone => {
            phone.getCart();
        });
    }
}

class ShippingDecorator extends CartDecorator{

    getShipping() {
        this.getCartItems();
    }
}
const shipping = new ShippingDecorator(phone);
shipping.getShipping();