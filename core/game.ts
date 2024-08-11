import { Scene } from "./scene/scene.js";
import { renderGame } from "./render.js";
import { updateGame } from "./update.js";

export class Game {
    scene: Scene = new Scene;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
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
        this.canvas.addEventListener("mousedown", (event: PointerEvent) => this.#onMouseDown(event));
        this.canvas.addEventListener("mouseup", (event: PointerEvent) => this.#onMouseUp(event));
    }

    #onMouseDown(event: PointerEvent) {
        console.log("mouse down!", event);
    }
    #onMouseUp(event: PointerEvent) {
        console.log("mouse up!", event);
    }
}