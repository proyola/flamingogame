var canvas = document.getElementById('canvasGame');
var ctx = canvas.getContext("2d");

var board = new Board(canvas, ctx);
board.draw();
function update() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  board.draw();
}

setInterval(update, 1000);
