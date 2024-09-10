import { Scene } from "./scene/scene.js";
import { renderGame } from "./render.js";
import { updateGame } from "./update.js";
export class Game {
    canvas;
    scene;
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new Scene(canvas);
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
        this.canvas.addEventListener("mousemove", (event) => this.scene.inputState.onMouseMove(event));
        this.canvas.addEventListener("mousedown", (event) => this.scene.inputState.onMouseDown(event));
        this.canvas.addEventListener("mouseup", (event) => this.scene.inputState.onMouseUp(event));
        document.addEventListener("keydown", (event) => this.scene.inputState.onKeyDown(event));
        document.addEventListener("keyup", (event) => this.scene.inputState.onKeyUp(event));
    }
}
