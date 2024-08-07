export function renderGame(scene, canvas) {
    const ctx = canvas.getContext("2d");
    renderBackground(ctx, canvas);
    renderItemDescription(ctx, scene);
}
function renderBackground(ctx, canvas) {
    ctx.fillStyle = "#AAA";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function renderItemDescription(ctx, scene) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 256, 512);
    ctx.fillStyle = "black";
    ctx.font = "bold 16px arial";
    ctx.fillText(`Mods: ${scene.item.mods.length}`, 48, 64);
    for (let i = 0; i < scene.item.mods.length; i++) {
        const mod = scene.item.mods[i];
        ctx.fillText(`${mod.value}`, 64, 64 + 20 + (i * 20));
    }
}
