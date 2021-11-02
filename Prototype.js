function Vehicle (
    type,
    color,
    speed,
) {
    this.type = type;
    this.color = color;
    this.speed = speed;

    this.getSpeed = () => {
        return `${this.color} ${this.type} goes at a speed of ${this.speed}km/h`;
    }
}

function Car (color, speed) {
    Vehicle.call(this, 'car', color, speed);
    this.getDoorsCount = () => 4;
}

function Plane (color, speed) {
    Vehicle.call(this, 'plane', color, speed);
    this.getHandsCount = () => 2;
}

function Bicycle (color, speed) {
    Vehicle.call(this, 'bicycle', color, speed);
    this.getWheelsCount = () => 2;
}

const car = new Car('black', 120);
const plane = new Plane('white', 920);
const bicycle = new Bicycle('red', 40);

[car, plane, bicycle].forEach(e => console.log(e.getSpeed()))