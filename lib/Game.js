var canvas = document.getElementById('canvasGame');
var ctx = canvas.getContext("2d");
var boardInterval, flamingosInterval;

var board = new Board(canvas, ctx);
board.drawBg();
function createBoard() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  board.drawBg();
  board.createFlamingo();
  board.drawAxe();
}
function moveFlamingos() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  board.drawBg();
  board.moveFlamingos();
  board.drawAxe();
}
$("#start-button").click(function(e){
  e.preventDefault();
  console.log("boardInterval", boardInterval);
  if (!boardInterval || !flamingosInterval){
    boardInterval = setInterval(createBoard, 500);
    flamingosInterval = setInterval(moveFlamingos, 150);
  }
});

$("#pause-button").click(function(e){
  e.preventDefault();
  clearInterval(boardInterval);
  clearInterval(flamingosInterval);
  boardInterval = null;
  flamingosInterval = null;
});
