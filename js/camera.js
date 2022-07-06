// Requires Vector

class Camera {
    #p = undefined;
    #scale = undefined;
    #maxX = undefined;
    #maxY = undefined;
    #minX = undefined;
    #minY = undefined;
    #maxScale = undefined;
    #minScale = undefined;

    constructor(position, scale, maxX, maxY, minX, minY, maxScale, minScale) {
        this.#p = position;
        this.#scale = scale;
    }

    move(deltaX, deltaY, deltaScale) {
        this.#p = new Vector(this.#p.x + deltaX, this.#p.y + deltaY);
        this.#scale += deltaScale;
    }

    get scale() {
        return this.#scale;
    }

    set scale(scale) {
        this.#scale = scale;
    }

    get p() {
        return this.#p;
    }

    set p(vector) {
        this.#p = vector;
    }
}
