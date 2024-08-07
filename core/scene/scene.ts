import { Item } from "./item.js";

export class Scene {
    ticks: number;
    item: Item = Item.Generate();

    constructor() {
    }
}