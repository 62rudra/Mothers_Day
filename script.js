function showMessage() {
  document.getElementById("surpriseText").textContent = "You are the reason I smile every day, Ma! 🌷";
}

// Draw floating hearts on canvas
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    color: `rgba(255, 105, 180, ${Math.random()})`
  };
}

function drawHeart(h) {
  ctx.beginPath();
  ctx.moveTo(h.x, h.y);
  ctx.bezierCurveTo(h.x + h.size / 2, h.y - h.size, h.x + h.size * 1.5, h.y + h.size / 3, h.x, h.y + h.size);
  ctx.bezierCurveTo(h.x - h.size * 1.5, h.y + h.size / 3, h.x - h.size / 2, h.y - h.size, h.x, h.y);
  ctx.fillStyle = h.color;
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hearts.length < 100) hearts.push(createHeart());

  for (let i = 0; i < hearts.length; i++) {
    const h = hearts[i];
    h.y -= h.speed;
    drawHeart(h);
    if (h.y < -100) hearts.splice(i, 1);
  }

  requestAnimationFrame(animate);
}

animate();
