const canvas = document.getElementById('ball-canvas');
const ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 20;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#b02455';
  ctx.fill();
}

draw();

document.addEventListener('keydown', (e) => {
  const step = 10;
  switch (e.key) {
    case 'ArrowUp':
      y = Math.max(radius, y - step);
      break;
    case 'ArrowDown':
      y = Math.min(canvas.height - radius, y + step);
      break;
    case 'ArrowLeft':
      x = Math.max(radius, x - step);
      break;
    case 'ArrowRight':
      x = Math.min(canvas.width - radius, x + step);
      break;
  }
  draw();
});
