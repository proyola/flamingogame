function Board(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.flamingos  = [new Flamingo()];
  this.axe = new Axe();
  this.img = new Image();
  this.img.src = "sunny-tropical-beach-palms-1.jpg";
  this.img.onload = (function() {
    this.isReady = true;
  }).bind(this);
}
Board.prototype.drawBg = function(){
  if (this.isReady === true ) {
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
  }
};
Board.prototype.moveFlamingos = function() {
  for (var i = 0; i < this.flamingos.length; i++) {
    this.flamingos[i].moveRight();
    this.ctx.drawImage(this.flamingos[i].img, this.flamingos[i].x, this.flamingos[i].y, 75, 75);
  }
};
Board.prototype.createFlamingo = function() {
  this.flamingos.push(new Flamingo());
  for (var j = 0; j < this.flamingos.length; j++) {
    this.ctx.drawImage(this.flamingos[j].img, this.flamingos[j].x, this.flamingos[j].y, 75, 75);
  }
};
Board.prototype.drawAxe = function() {
  this.ctx.drawImage(this.axe.img, this.axe.x, this.axe.y, 50, 50);
};
//left arrow 37, right arrow 39, enter 13
