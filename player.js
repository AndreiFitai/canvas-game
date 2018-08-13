//CONTROLS
var up = false;
var down = false;
var left = false;
var right = false;
var shoot = false;
var direction = "right"

//PLAYER CHARACTER OBJECT
var player = {
  height: 15,
  width: 5,
  gravity: 4,
  posX: 250,
  posY: 335,
  gravity: 3,
  moveLeft: function(){
    direction = "left"
    this.posX -= 3
  },

  moveRight: function(){
    direction = "right"
    this.posX += 3
  },
  moveUp: function(){
    if (player.posY+player.height == background.posY || player.posY+player.height > background.posY )
      this.gravity *= -1;
  },

  shoot: function(){
    if (this.direction == 'right')
      projectile.pew('right')
    else
      projectile.pew('left')
  },

  draw: function(){
    if( this.posY+this.height > background.posY){
      this.posY + this.gravity;
    }
    ctx.fillRect(this.posX,this.posY,this.width,this.height)
  }
}

var first = 0;

function playerMovement(){
  if ( player.posY+player.height < background.posY){
    player.gravity = 1
  }
  if ( left == true){
    player.moveLeft();
  }
  if (right == true){
    player.moveRight();
  }
  if (up == true){
    player.moveUp();
  }
  if (shoot == true){
    if ( updateCounter%10 == 0 || first == 0){
      bulletsArr.push(new Projectile(direction));
      first++;
    }
  }
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          console.log('left');
          left = true;
          break;
      case 38:
          console.log('up');
          up = true;
          break;
      case 39:
          console.log('right');
          right = true;
          break;
      case 40:
          console.log('down');
          down = true;
          break;
      case 32:
          console.log('space');
          shoot = true;
          break;
  }
};

document.onkeyup = function(e) {
  switch (e.keyCode) {
      case 37:
          console.log('left');
          left = false;
          break;
      case 38:
          console.log('up');
          up = false;
          break;
      case 39:
          console.log('right');
          right = false;
          break;
      case 40:
          console.log('down');
          down = false;
          break;
      case 32:
          console.log('space');
          first = 0;
          shoot = false;
          break;
  }
};