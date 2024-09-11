import { Item } from "./scene/item.js";
export function updateGame(scene, input) {
    scene.items.push(Item.Generate());
    // Keyboard
    if (input.keyW)
        scene.player.entity.origin.y--;
    if (input.keyS)
        scene.player.entity.origin.y++;
    if (input.keyA)
        scene.player.entity.origin.x--;
    if (input.keyD)
        scene.player.entity.origin.x++;
    // Every second
    if (scene.ticks % 60 == 0) {
    }
    scene.ticks++;
}
