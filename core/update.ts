import { Item } from "./scene/item.js";
import { Scene } from "./scene/scene.js";

export function updateGame(scene: Scene) {
    scene.items.push(Item.Generate());
    if (scene.ticks % 60 == 0) {
    }
    ++scene.ticks;
}