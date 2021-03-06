// import axios from 'axios';

export default function() {
  var canvas = document.getElementById('trackingCanvas'),
    ctx = canvas.getContext('2d'),
    rect = {},
    drag = false;

  function init() {
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.style.pointerEvents = 'auto';
    canvas.style.cursor = 'crosshair';
  }

  function mouseDown(e) {
    var bounds = e.target.getBoundingClientRect();
    rect.startLeftX = e.clientX - bounds.left;
    rect.startTopY = e.clientY - bounds.top;
    drag = true;
  }

  function mouseUp() {
    drag = false;
    canvas.style.pointerEvents = 'none';
    console.log(
      `X:${rect.startLeftX} Y:${rect.startTopY} W:${rect.width} H:${
        rect.height
      }`
    );
    //POST REQUEST HERE
    // axios.post()
    setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 400);
  }
  function mouseMove(e) {
    var bounds = e.target.getBoundingClientRect();
    if (drag) {
      rect.width = e.clientX - bounds.left - rect.startLeftX;
      rect.height = e.clientY - bounds.top - rect.startTopY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
    }
  }

  function draw() {
    ctx.setLineDash([4]);
    ctx.strokeStyle = 'Cyan';
    ctx.lineWidth = '3';
    ctx.strokeRect(rect.startLeftX, rect.startTopY, rect.width, rect.height);
  }

  init();
}
