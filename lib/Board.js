function Board(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.flamingo  = new Flamingo();
  this.img = new Image();
  this.img.src = "grass.jpg";
  this.img.onload = (function() {
    this.isReady = true;
  }).bind(this);
}
Board.prototype.draw = function(){
  if (this.isReady === true ) {
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
    this.flamingo.moveRight();
    this.ctx.drawImage(this.flamingo.img, this.flamingo.x, this.flamingo.y, 75, 75);
  }
};
