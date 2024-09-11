import { Input } from "./scene/input.js";
import { Item } from "./scene/item.js";
import { Scene } from "./scene/scene.js";

export function updateGame(scene: Scene, input: Input, deltaTime: number) {
    if (input.showFPS) {
        scene.fpsCounter.update(deltaTime);
        console.log(scene.fpsCounter.average);
    }

    scene.items.push(Item.Generate());

    // Keyboard
    if (input.keyW) scene.player.entity.origin.y--;
    if (input.keyS) scene.player.entity.origin.y++;
    if (input.keyA) scene.player.entity.origin.x--;
    if (input.keyD) scene.player.entity.origin.x++;

    // Every second
    if (scene.ticks % 60 == 0) {
    }

    scene.ticks++;
}