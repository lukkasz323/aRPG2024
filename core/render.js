export function renderGame(scene, canvas) {
    const ctx = canvas.getContext("2d");
    renderBackground(ctx, canvas);
    renderItemDescription(ctx);
}
function renderBackground(ctx, canvas) {
    ctx.fillStyle = "#AAA";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function renderItemDescription(ctx) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 64, 64);
}
