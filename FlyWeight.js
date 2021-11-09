// flyweight class
class IceCream {
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}

// factory for flyweight objects
class IceCreamFactory {
    constructor() {
        this._iceCreams = [];
    }

    createIceCream(flavour, price) {
        let iceCream = this.getIceCream(flavour);
        if (iceCream) {
            return iceCream;
        } else {
            const newIceCream = new IceCream(flavour, price);
            this._iceCreams.push(newIceCream);
            return newIceCream;
        }
    }

    getIceCream(flavour) {
        return this._iceCreams.find(iceCream => iceCream.flavour === flavour);
    }
}

const factory = new IceCreamFactory();

const chocoVanilla = factory.createIceCream('chocolate and vanilla', 15);
const vanillaChoco = factory.createIceCream('chocolate and vanilla', 15);

// reference to the same object
console.log(chocoVanilla === vanillaChoco); // true