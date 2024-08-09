import { Item } from "./scene/item.js";
export function updateGame(scene) {
    scene.items.push(Item.Generate());
    if (scene.ticks % 60 == 0) {
    }
    ++scene.ticks;
}
