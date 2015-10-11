'use strict';

window.onload = function onload() {
  const canvas = document.querySelector('canvas');

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(0, 100, 200)';
  ctx.fillRect(Math.round(Math.random() * 10), 10, 55, 50);
};
