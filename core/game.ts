import { Scene } from "./scene/scene.js";
import { renderGame } from "./render.js";
import { updateGame } from "./update.js";
import { Input } from "./scene/input.js";

export class Game {
    scene: Scene;
    input: Input;

    constructor(public canvas: HTMLCanvasElement) {
        this.scene = new Scene();
        this.input = new Input(canvas);
    }

    run() {
        const targetFPS = 60;

        //renderGame(this.scene, this.canvas);
        let lastDate = performance.now();
        setInterval(() => gameLoop(this.scene, this.canvas, this.input), 1000 / targetFPS);
        this.input.addEventListeners();
        
        function gameLoop(scene: Scene, canvas: HTMLCanvasElement, input: Input) {
            let now = performance.timeOrigin + performance.now();
            let deltaTime = now - lastDate;
            lastDate = now;

            updateGame(scene, input, deltaTime);
            renderGame(scene, canvas);
        }        
    }

    
}