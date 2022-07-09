// Requires Vector

class Mouse {
    #scrollY = 0;
    #p;
    #buttons = {};
    #buttonMap = {}; // e.g. { event.which: "right" }

    constructor(position, buttonMap) {
        this.#p = position ?? new Vector(0 , 0);
        this.#buttonMap = buttonMap ?? {};

        // Add mapped buttons
        for (let btn in buttonMap) {
            this.#buttons[buttonMap[btn]] = Mouse.#createButton();
        }
    }

    static #createButton(isDown, downAt, upAt) {
        return {
            isDown: isDown ?? false,
            downAt: downAt ?? new Vector(0 , 0),
            upAt: upAt ?? new Vector(0 , 0),
        };
    }

    moveTo(x, y) {
        this.#p = new Vector(x, y);
    }

    onScroll(deltaY) {
        this.#scrollY += deltaY;
    }

    onMouseDown(which, deltaX, deltaY) {
        if (which in this.#buttonMap) {
            this.#buttons[this.#buttonMap[which]].isDown = true;
            this.#buttons[this.#buttonMap[which]].downAt = new Vector(deltaX, deltaY);
        }
    }

    onMouseUp(which, deltaX, deltaY) {
        if (which in this.#buttonMap) {
            this.#buttons[this.#buttonMap[which]].isDown = false;
            this.#buttons[this.#buttonMap[which]].upAt = new Vector(deltaX, deltaY);
        }
    }

    btn(name) {
        if (name in this.#buttons) {
            return Mouse.#createButton(
                this.#buttons[name].isDown,
                this.#buttons[name].downAt,
                this.#buttons[name].upAt
            );
        }

        return null;
    }

    get p() {
        return this.#p;
    }

    get x() {
        return this.#p.x;
    }

    get y() {
        return this.#p.y;
    }

    get scroll() {
        return this.#scrollY;
    }
}
