import { Scene } from "./scene/scene.js";
import { renderGame } from "./render.js";
import { updateGame } from "./update.js";
export class Game {
    scene = new Scene;
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
    }
    run() {
        const fps = 60;
        renderGame(this.scene, this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        this.#addEventListeners();
        function gameLoop(scene, canvas) {
            updateGame(scene);
            renderGame(scene, canvas);
        }
    }
    #addEventListeners() {
        this.canvas.addEventListener("mousedown", (event) => this.#onMouseDown(event));
        this.canvas.addEventListener("mouseup", (event) => this.#onMouseUp(event));
    }
    #onMouseDown(event) {
        console.log("mouse down!", event);
    }
    #onMouseUp(event) {
        console.log("mouse up!", event);
    }
}
