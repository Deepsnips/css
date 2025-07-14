/*document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('neon-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});*/

const cursor = document.getElementById('neon-cursor');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const speed = 0.1; // Lower value = more delay

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.left = `${currentX}px`;
  cursor.style.top = `${currentY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

function createTrail(x, y) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500); // Adjust lifespan
}

setInterval(() => {
  createTrail(currentX, currentY);
}, 20); // Add trail every 20ms

