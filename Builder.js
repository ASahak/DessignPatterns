function Car () {
    this.brand = null;
    this.model = null;
    this.color = null;
    this.doorsCount = null;
    this.hp = null;
}

function CarBuilder (
    brand,
    model,
) {
    this.car = new Car();
    this.car.brand = brand;
    this.car.model = model;
}

CarBuilder.prototype = {
    reset () {
        this.car = new Car();
    },
    makeEngine (hp) {
        this.car.hp = hp;
        return this;
    },
    makeSkeleton (doorsLength) {
        this.car.doorsCount = doorsLength;
        return this;
    },
    paintCar () {
        return this;
    },
    setColor (color) {
        this.car.color = color;
        return this;
    },
    getCar () {
        const _car = this.car;
        this.reset();
        return _car;
    }
}

const carBuilder = new CarBuilder(
    'Toyota',
    'Corolla',
)
.makeSkeleton()
.makeEngine(243)
.setColor('black')
.paintCar()
.getCar();