const canvas = document.getElementById("malla");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const puntos = [];
for (let x = 0; x < canvas.width; x += 40) {
  for (let y = 0; y < canvas.height; y += 40) {
    puntos.push({ x, y });
  }
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let punto of puntos) {
    const dx = punto.x - mouse.x;
    const dy = punto.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const tamaño = Math.max(2, 10 - dist / 30);
    ctx.beginPath();
    ctx.arc(punto.x, punto.y, tamaño, 0, Math.PI * 2);
    ctx.fillStyle = "#0ff";
    ctx.fill();
  }
  requestAnimationFrame(dibujar);
}

const mouse = { x: 0, y: 0 };
canvas.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

dibujar();
