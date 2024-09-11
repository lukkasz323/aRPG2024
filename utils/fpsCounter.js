export class FPSCounter {
    #fpsRecords = [];
    #accuracy = 10;
    get average() {
        const sum = this.#fpsRecords.reduce((a, b) => a + b, 0);
        return Math.round(sum / this.#fpsRecords.length);
    }
    update(deltaTime) {
        const fps = 1000 / deltaTime;
        this.#fpsRecords.push(fps);
        if (this.#fpsRecords.length > this.#accuracy) {
            this.#fpsRecords.shift();
        }
    }
}
