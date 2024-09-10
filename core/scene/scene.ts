import { Entity } from "./entity.js";
import { Item } from "./item.js";
import { InputState as InputState } from "./inputState.js";
import { Player } from "./player.js";

export class Scene {
    ticks: number = 0;
    items: Item[] = [];
    player = new Player();
    enemies: Entity[] = [];
    inputState: InputState;
    

    constructor(canvas) {
        this.inputState = new InputState(this, canvas)

        this.player = new Player({x: 1, y: 1});
        this.enemies.push(new Entity({x: 3, y: 4}));
        this.enemies.push(new Entity({x: 12, y: 9}));

        console.log(this);
    }
}