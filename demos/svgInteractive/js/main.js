'use strict';

window.onload = function onload() {
  const svg = document.querySelector('svg');

  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', 50);
  rect.setAttribute('y', 50);
  rect.setAttribute('width', 100);
  rect.setAttribute('height', 100);

  rect.addEventListener('click', function(e) {
    svg.removeChild(rect);
  });

  svg.appendChild(rect);
};
