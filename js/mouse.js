// Requires Vector

class Mouse {
    #scrollY = 0;
    #p;
    #left = Mouse.#createButton();
    #middle = Mouse.#createButton();
    #right = Mouse.#createButton();
    #backward = Mouse.#createButton();
    #forward = Mouse.#createButton();
    #aux0 = Mouse.#createButton();
    #aux1 = Mouse.#createButton();
    #aux2 = Mouse.#createButton();
    #aux3 = Mouse.#createButton();
    #aux4 = Mouse.#createButton();
    #aux5 = Mouse.#createButton();
    #aux6 = Mouse.#createButton();
    #aux7 = Mouse.#createButton();
    #aux8 = Mouse.#createButton();
    #aux9 = Mouse.#createButton();

    #buttonMap = {
        1: this.#left,
        2: this.#middle,
        3: this.#right,
        4: this.#backward,
        5: this.#forward,
        6: this.#aux0,
        7: this.#aux1,
        8: this.#aux2,
        9: this.#aux3,
        10: this.#aux4,
        11: this.#aux5,
        12: this.#aux6,
        13: this.#aux7,
        14: this.#aux8,
        15: this.#aux9,
    };

    constructor(position) {
        this.#p = position ?? new Vector(0 , 0);
    }

    updateButtonMap(buttonMap) {
        this.#buttonMap = buttonMap;
    }

    static #createButton(isDown, downAt, upAt) {
        if (isDown && typeof isDown !== "boolean") {
            return {
                isDown: isDown.isDown,
                downAt: isDown.downAt,
                upAt: isDown.upAt,
            };
        }

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
            this.#buttonMap[which].isDown = true;
            this.#buttonMap[which].downAt = new Vector(deltaX, deltaY);
        }
    }

    onMouseUp(which, deltaX, deltaY) {
        if (which in this.#buttonMap) {
            this.#buttonMap[which].isDown = false;
            this.#buttonMap[which].upAt = new Vector(deltaX, deltaY);
        }
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

    get left() {
        return Mouse.#createButton(this.#left);
    }

    get middle() {
        return Mouse.#createButton(this.#middle);
    }

    get right() {
        return Mouse.#createButton(this.#right);
    }

    get backward() {
        return Mouse.#createButton(this.#backward);
    }

    get forward() {
        return Mouse.#createButton(this.#forward);
    }

    get aux0() {
        return Mouse.#createButton(this.#aux0);
    }

    get aux1() {
        return Mouse.#createButton(this.#aux1);
    }

    get aux2() {
        return Mouse.#createButton(this.#aux2);
    }

    get aux3() {
        return Mouse.#createButton(this.#aux3);
    }

    get aux4() {
        return Mouse.#createButton(this.#aux4);
    }

    get aux5() {
        return Mouse.#createButton(this.#aux5);
    }

    get aux6() {
        return Mouse.#createButton(this.#aux6);
    }

    get aux7() {
        return Mouse.#createButton(this.#aux7);
    }

    get aux8() {
        return Mouse.#createButton(this.#aux8);
    }

    get aux9() {
        return Mouse.#createButton(this.#aux9);
    }
}
