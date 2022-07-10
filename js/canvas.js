class Canvas {
    #canvas;
    #ctx;

    constructor(canvas, ctx, width, height) {
        this.#canvas = canvas;
        this.#ctx = ctx;
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

    get ctx() {
        return this.#ctx;
    }

    hide() {
        this.#canvas.style.display = "none";
    }

    show() {
        this.#canvas.style.display = "block";
    }
}
