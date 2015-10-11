'use strict';

window.onload = function onload() {
  const canvas = document.querySelector('canvas');

  const ctx = canvas.getContext('2d');

  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.fill();
};
