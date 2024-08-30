import { Vector2 } from "../../utils/vector2";
import { Scene } from "./scene";

export class MouseState {
    screenOrigin: Vector2;
    //worldOrigin: Vector2;

    constructor(public scene: Scene, public canvas: HTMLCanvasElement) {
    }

    onMouseMove(event: PointerEvent): void {
        const canvasBoundingClientRect: DOMRect = this.canvas.getBoundingClientRect();

        this.screenOrigin = {
            x: Math.floor(event.x - canvasBoundingClientRect.x + 1),
            y: event.y - Math.floor(canvasBoundingClientRect.y)
        };

        //this.worldOrigin = {x: this.screenOrigin.x + this.scene.camera.origin.x, y: this.screenOrigin.y + this.scene.camera.origin.y};
    }

    onMouseDown(event: PointerEvent) {
    }

    onMouseUp(event: PointerEvent) {
    }
}