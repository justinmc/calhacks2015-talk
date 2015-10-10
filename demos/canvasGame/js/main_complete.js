'use strict';

const SPEED = 100; // px/s

function render(ctx, t, keys, pos) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const dt = Date.now() - t;
  const step = dt / 1000 * SPEED;

  if (keys.left) {
    pos.x -= step;
  }
  if (keys.up) {
    pos.y -= step;
  }
  if (keys.right) {
    pos.x += step;
  }
  if (keys.down) {
    pos.y += step;
  }

  ctx.fillStyle = 'rgb(0, 100, 200)';
  ctx.fillRect(pos.x, pos.y, 55, 50);
  //ctx.arc(20, 20, 12, 0, 2 * Math.PI);
  //ctx.fill();

  requestAnimationFrame(function() {
    render(ctx, t + dt, keys, pos);
  });
}

class KeyListener {
  constructor() {
    document.addEventListener('keydown', (e) => {
      if (e.which === 37) {
        this.left = true;
      }
      if (e.which === 38) {
        this.up = true;
      }
      if (e.which === 39) {
        this.right = true;
      }
      if (e.which === 40) {
        this.down = true;
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.which === 37) {
        this.left = false;
      }
      if (e.which === 38) {
        this.up = false;
      }
      if (e.which === 39) {
        this.right = false;
      }
      if (e.which === 40) {
        this.down = false;
      }
    });
  }
}

window.onload = function onload() {
  const canvas = document.querySelector('canvas');

  const ctx = canvas.getContext('2d');

  const t = Date.now();

  const keys = new KeyListener();

  render(ctx, t, keys, {x: 10, y: 10});
};
