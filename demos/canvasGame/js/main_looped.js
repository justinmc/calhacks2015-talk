'use strict';

const SPEED = 100; // px/s

function render(ctx, t) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = 'rgb(0, 100, 200)';
  ctx.fillRect(Math.round(Math.random() * 10), 10, 55, 50);

  requestAnimationFrame(function() {
    render(ctx);
  });
}

window.onload = function onload() {
  const canvas = document.querySelector('canvas');

  const ctx = canvas.getContext('2d');

  const t = Date.now();

  render(ctx, t);
};
