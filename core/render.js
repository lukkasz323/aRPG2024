export function renderGame(scene, canvas) {
    const ctx = canvas.getContext("2d");
    renderBackground(ctx, canvas);
    renderItemDescription(ctx, scene);
    renderItems(ctx, scene);
    renderItemCountByRarity(ctx, scene);
}
function renderBackground(ctx, canvas) {
    ctx.fillStyle = "#AAA";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function renderItemDescription(ctx, scene) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 256, 512);
    if (scene.items[0]) {
        ctx.fillStyle = "black";
        ctx.font = "bold 16px arial";
        ctx.fillText(`Mods: ${scene.items[0].mods.length}`, 48, 64);
        for (let i = 0; i < scene.items[0].mods.length; i++) {
            const mod = scene.items[0].mods[i];
            ctx.fillText(`${mod.value}`, 64, 64 + 20 + (i * 20));
        }
    }
}
function renderItems(ctx, scene) {
    ctx.fillStyle = "black";
    ctx.font = "bold 16px arial";
    for (let i = 0; i < scene.items.length; i++) {
        const item = scene.items[i];
        ctx.fillText(`${item.mods.length}`, 384, 64 + 20 + (i * 20));
    }
}
function renderItemCountByRarity(ctx, scene) {
    ctx.fillStyle = "black";
    ctx.font = "bold 16px arial";
    ctx.fillText(`0:   ${scene.items.filter(i => i.mods.length == 0).length}`, 320, 64);
    ctx.fillText(`1:   ${scene.items.filter(i => i.mods.length == 1).length}`, 320, 64 + 20);
    ctx.fillText(`2:   ${scene.items.filter(i => i.mods.length == 2).length}`, 320, 64 + 40);
    ctx.fillText(`3:   ${scene.items.filter(i => i.mods.length == 3).length}`, 320, 64 + 60);
    ctx.fillText(`3+: ${scene.items.filter(i => i.mods.length > 3).length}`, 320, 64 + 80);
}
