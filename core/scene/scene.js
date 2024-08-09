import { Item } from "./item.js";
export class Scene {
    ticks;
    item = Item.Generate();
    constructor() {
        console.log(this);
    }
}
