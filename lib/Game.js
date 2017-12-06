var canvas = document.getElementById('canvasGame');
var ctx = canvas.getContext("2d");

var board = new Board(canvas, ctx);
board.drawBg();
function createBoard() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  board.drawBg();
  board.createFlamingo();
}
function moveFlamingos() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  board.drawBg();
  board.moveFlamingos();
}
setInterval(createBoard, 500);
setInterval(moveFlamingos, 100);
