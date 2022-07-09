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
    #onCameraChangeCallback;

    constructor(position, scale) {
        this.#p = position;
        this.#scale = scale;
    }

    initThresholds(maxX, maxY, minX, minY, maxScale, minScale) {
        // ToDo: Clamps!
        return this;
    }

    initEvents(onCameraChangeCallback) {
        if (typeof onCameraChangeCallback === "function") {
            this.#onCameraChangeCallback = onCameraChangeCallback;
        }

        return this;
    }

    moveBy(deltaVector, deltaScale) {
        this.#p = this.#p.add(deltaVector);
        this.#scale += deltaScale;

        if (deltaVector.x !== 0 || deltaVector.y !== 0 || deltaScale !== 0) {
            this.#triggerOnCameraChangeCallback();
        }
    }

    moveTo(vector, scale) {
        let vectorDifferent = !this.#p.equals(vector);
        let scaleDifferent = false;

        this.#p = vector;

        if (!isNaN(scale)) {
            scaleDifferent = (this.#scale !== scale);
            this.#scale = scale;
        }

        if (vectorDifferent || scaleDifferent) {
            this.#triggerOnCameraChangeCallback();
        }
    }

    #triggerOnCameraChangeCallback() {
        if (this.#onCameraChangeCallback) {
            try {
                this.#onCameraChangeCallback(this);
            }
            catch (e) {
                console.log("An error occurred in the OnCameraChangeCallback of Camera: " + e);
            }
        }
    }

    get scale() {
        return this.#scale;
    }

    get p() {
        return this.#p;
    }
}
