function Flamingo() {
  this.x = 100;
  this.y = 100;
  this.vx = 20;
  this.vy = 20;
  this.speed += 10;
}
// Flamingo.prototype.drawFlamingo = function() {
//
//   var that = this;
//   var flamingo;
//   this.interval = setInterval(function() {
//     var flamingo = new Flamingo();
//     that.flamingos.push(flamingo);
//     flamingo.draw();
//     that.moveFlamingos();
//   }, 1 * 1000);
// };

Flamingo.prototype.move = function() {
  // for (var i = 0; i < this.flamingos.length; i++) {
  //   var flamingo = this.flamingos[i];
  //   console.log(flamingo);
  //   flamingo.x += 100;
  // debugger;
  //   // flamingo.draw();
  //   console.log(flamingo);
  // }
  // flamingo.draw();
  // flamingo.x += flamingo.vx;
  // flamingo.y += flamingo.vy;
  // if (flamingo.y + flamingo.vy > canvas.height || flamingo.y + flamingo.vy < 0) {
  //   flamingo.vy *= -1;
  // }
  // if (flamingo.x + flamingo.vx > canvas.width || flamingo.x + flamingo.vx < 0) {
  //   flamingo.vx *= -1;
  // }
};

Flamingo.prototype.draw = function(){
  var img = new Image();
  img.onload = function() {
     ctx.drawImage(img, this.x, this.y, 100, 100);
   }.bind(this);
  img.src = "https://vignette.wikia.nocookie.net/clubpenguin/images/4/49/Pink_Flamingo_sprite_001.png";
};

// Flamingo.prototype.moveUp = function() {
//   this.y -= 25;
// };
//
// Flamingo.prototype.moveDown = function() {
//   this.y += 25;
// };
//
// Flamingo.prototype.moveLeft = function() {
//   this.x -= 25;
// };

Flamingo.prototype.moveRight = function() {
  this.x += 25;
};

//66
//2ºizq
