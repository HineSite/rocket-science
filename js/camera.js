// Requires Vector

class Camera {
    #p;
    #scale;
    #maxX;
    #maxY;
    #minX;
    #minY;
    #maxScale;
    #minScale;
    #onScaleCallback;
    #onMoveCallback;

    constructor(position, scale) {
        this.#p = position;
        this.#scale = scale;
    }

    initThresholds(maxX, maxY, minX, minY, maxScale, minScale) {
        // ToDo: Clamps!
        return this;
    }

    initEvents(onScaleCallback, onMoveCallback) {
        if (typeof onScaleCallback === "function") {
            this.#onScaleCallback = onScaleCallback;
        }

        if (typeof onMoveCallback === "function") {
            this.#onMoveCallback = onMoveCallback;
        }

        return this;
    }

    move(deltaX, deltaY, deltaScale) {
        this.#p = new Vector(this.#p.x + deltaX, this.#p.y + deltaY);
        this.#scale += deltaScale;

        if (deltaX !== 0 || deltaY !== 0) {
            this.#triggerOnMove();
        }

        if (deltaScale !== 0) {
            this.#triggerOnScale();
        }
    }

    #triggerOnMove() {
        if (this.#onMoveCallback) {
            try {
                this.#onMoveCallback(this);
            }
            catch (e) {
                console.log("An error occurred in the onMoveCallback of Camera: " + e);
            }
        }
    }

    #triggerOnScale() {
        if (this.#onScaleCallback) {
            try {
                this.#onScaleCallback(this);
            }
            catch (e) {
                console.log("An error occurred in the onScaleCallback of Camera: " + e);
            }
        }
    }

    get scale() {
        return this.#scale;
    }

    set scale(scale) {
        this.#scale = scale;
        this.#triggerOnScale();
    }

    get p() {
        return this.#p;
    }

    set p(vector) {
        this.#p = vector;
        this.#triggerOnMove();
    }
}
