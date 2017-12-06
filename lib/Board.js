function Board(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.img = new Image();
  this.img.src = "grass.jpg";
  this.img.onload = (function() {
    this.isReady = true;
  }).bind(this);
}
Board.prototype.draw = function(){
  if (this.isReady === true ) {
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
  }
};

Board.prototype.moveRight = function(){
  flamingo.speedx += 10;
  flamingo.draw();
};

// ctx.fillStyle = "#FF0000";
// ctx.fillRect(100,0,50,50);
// ctx.fillRect(300,0,50,50);
// ctx.fillRect(500,0,50,50);
