import { MouseState } from "./mouseState.js";
export class Scene {
    ticks = 0;
    items = [];
    mouseState;
    constructor(canvas) {
        this.mouseState = new MouseState(this, canvas);
        console.log(this);
    }
}
