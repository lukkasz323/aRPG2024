import { Scene } from "./scene/scene.js";
import { renderGame } from "./render.js";
import { updateGame } from "./update.js";

export class Game {
    scene: Scene;

    constructor(public canvas: HTMLCanvasElement) {
        this.scene = new Scene(canvas);
    }

    run() {
        const fps = 60;

        renderGame(this.scene, this.canvas);
        setInterval(() => gameLoop(this.scene, this.canvas), 1000 / fps);
        this.#addEventListeners();
        
        function gameLoop(scene: Scene, canvas: HTMLCanvasElement) {
            updateGame(scene);
            renderGame(scene, canvas);
        }        
    }

    #addEventListeners() {
        this.canvas.addEventListener("mousemove", (event: PointerEvent) => this.scene.mouseState.onMouseMove(event));
        this.canvas.addEventListener("mousedown", (event: PointerEvent) => this.scene.mouseState.onMouseDown(event));
        this.canvas.addEventListener("mouseup", (event: PointerEvent) => this.scene.mouseState.onMouseUp(event));
    }
}