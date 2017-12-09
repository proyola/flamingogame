var canvas = document.getElementById('canvasGame');
var ctx = canvas.getContext("2d");
var boardInterval, flamingosInterval;

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
$("#start-button").click(function(e){
  e.preventDefault();
  boardInterval = setInterval(createBoard, 500);
  flamingosInterval = setInterval(moveFlamingos, 150);
});

$("#pause-button").click(function(e){
  e.preventDefault();
  clearInterval(boardInterval);
  clearInterval(flamingosInterval);
});
