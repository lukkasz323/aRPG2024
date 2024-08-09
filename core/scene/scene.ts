import { Item } from "./item.js";

export class Scene {
    ticks: number = 0;
    items: Item[] = [];

    constructor() {
        console.log(this);
    }
}