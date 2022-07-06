class Canvas {
    #canvas = undefined;

    constructor(canvas, width, height) {
        this.#canvas = canvas;
        this.#canvas.width = width;
        this.#canvas.height = height;
    }

    updateSize(width, height) {
        this.#canvas.width = width;
        this.#canvas.height = height;
    }

    get width() {
        return this.#canvas.width;
    }

    get height() {
        return this.#canvas.height;
    }
}
