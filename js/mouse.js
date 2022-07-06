// Requires Vector

class Mouse
{
    #scrollY = 0;
    #p = undefined;
    #buttons = {};
    #buttonMap = {}; // e.g. { event.which: "right" }

    constructor(initialX, initialY, buttonMap) {
        this.#p = new Vector(initialX, initialY);
        this.#buttonMap = buttonMap;

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

    onMove(deltaX, deltaY) {
        this.#p = new Vector(deltaX, deltaY);
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
        return new Vector(this.#p.x, this.#p.y);
    }

    get scroll() {
        return this.#scrollY;
    }
}
