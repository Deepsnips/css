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
