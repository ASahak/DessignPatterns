class Iterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

new Iterator([1, 2, 3]).next();