'use strict';
// Ball constructor
function Ball(x, y, velX, velY, color, size) {
  // x and y coordinates — the horizontal and vertical coordinates where the ball will start on the screen.
  // This can range between 0 (top left hand corner)
  // to the width and height of the browser viewport (bottom right hand corner).
  this.x = x;
  this.y = y;

// each ball is given a horizontal and vertical velocity;
// in real terms these values will be regularly added to the x/y coordinate values
// when we start to animate the balls,
// to move them by this much on each frame.

  this.velX = velX;
  this.velY = velY;

  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

// UPdate ball data
Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }

};
