import { Item } from "./item.js";
import { MouseState } from "./mouseState.js";

export class Scene {
    ticks: number = 0;
    items: Item[] = [];
    mouseState: MouseState;

    constructor(canvas) {
        this.mouseState = new MouseState(this, canvas)

        console.log(this);
    }
}