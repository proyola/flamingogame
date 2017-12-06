function Flamingo() {
  this.img = new Image();
  this.img.src = "flamingo2.png";
  this.x = 75;
  this.y = 75;
  this.vx = 20;
  this.vy = 20;
  this.speed += 10;
}

Flamingo.prototype.moveRight = function() {
    this.x += 30;
};
