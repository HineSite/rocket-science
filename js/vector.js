class Vector {
    #x = 0;
    #y = 0;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    static fromAngle (angle, magnitude) {
        return new Vector(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
    }

    getMagnitude() {
        return Math.sqrt(Math.pow(this.#x, 2) + Math.pow(this.#y, 2));
    }

    add (vector) {
        return new Vector(this.#x + vector.x, this.#y + vector.y);
    }

    subtract (vector) {
        return new Vector(this.#x - vector.x, this.#y - vector.y);
    }

    divide (scalar) {
        return new Vector(this.#x / scalar, this.#y / scalar); // You can handle zeros yourself...
    }

    multiply (scalar) {
        return new Vector(this.#x * scalar, this.#y * scalar);
    }

    normalize () {
        return this.divide(this.getMagnitude());
    }

    getAngle () {
        let tan = Math.atan2(this.#y, this.#x);
        return (tan < 0 ? (2 * Math.PI + tan) : tan);
    }

    equals (vector) {
        return (this.#x === vector.x && this.#y === vector.y);
    }

    toString (decimalPlaces) {
        return this.#x.toFixed(decimalPlaces) + ", " + this.#y.toFixed(decimalPlaces);
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
}
