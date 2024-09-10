export class InputState {
    scene;
    canvas;
    screenOrigin;
    //worldOrigin: Vector2;
    constructor(scene, canvas) {
        this.scene = scene;
        this.canvas = canvas;
    }
    onMouseMove(event) {
        const canvasBoundingClientRect = this.canvas.getBoundingClientRect();
        this.screenOrigin = {
            x: Math.floor(event.x - canvasBoundingClientRect.x + 1),
            y: event.y - Math.floor(canvasBoundingClientRect.y)
        };
        //this.worldOrigin = {x: this.screenOrigin.x + this.scene.camera.origin.x, y: this.screenOrigin.y + this.scene.camera.origin.y};
    }
    onMouseDown(event) {
    }
    onMouseUp(event) {
    }
    onKeyDown(event) {
    }
    onKeyUp(event) {
    }
}
