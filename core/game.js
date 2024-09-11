import { Scene } from "./scene/scene.js";
import { renderGame } from "./render.js";
import { updateGame } from "./update.js";
import { Input } from "./scene/input.js";
export class Game {
    canvas;
    scene;
    input;
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new Scene();
        this.input = new Input(canvas);
    }
    run() {
        const fps = 60;
        renderGame(this.scene, this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas, this.input), 1000 / fps);
        this.input.addEventListeners();
        function gameLoop(scene, canvas, input) {
            updateGame(scene, input);
            renderGame(scene, canvas);
        }
    }
}
