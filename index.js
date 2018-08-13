// window.onload = function () {
//   document.getElementById("start-btn").onclick = function () {
//     if (!isGameStarted) {
//       startGame();
//       isGameStarted = true;
//     }
//   };

// }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var background = {
  width: 600,
  height: 150,
  posX: 0,
  posY: 350,
  draw: function(){
    ctx.fillRect(this.posX,this.posY,this.width,this.height)
  }
}

//PLAYER CHARACTER OBJECT
var player = {
  height: 15,
  width: 5,
  gravity: 4,
  posX: 250,
  posY: 334,
  direction: "right",
  moveLeft: function(){
    this.direction = "left"
    this.posX -= 5
  },

  moveRight: function(){
    this.direction = "right"
    this.posX += 5
  },
  moveUp: function(){
    if (player.posY+player.height == background.posY+0.5)
      this.posY -= 30
  },

  shoot: function(){
    if (direction == 'right')
      projectile.draw('right')
    else
      projectile.draw('left')
  },

  draw: function(){
    ctx.fillRect(this.posX,this.posY,this.width,this.height)
  }
}

// PROJECTILE OBJECT
var projectile = {
  height: 2,
  width: 2,
  posY: player.posY+5,
  posX: player.posX+2,

  draw: function(dir){
    if ( dir = "right"){
      this.posX -= 10
    }
    else
      this.posX += 10
  }
}

setInterval(gameplay, 1000/50)


function gameplay(){
  ctx.clearRect(0,0,600,500)
  background.draw();
  player.draw()
  if ( player.posY+player.height < background.posY){
    player.posY += 1.5
  }
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          console.log('left');
          player.moveLeft();
          break;
      case 38:
          console.log('up');
          player.moveUp();
          break;
      case 39:
          console.log('right');
          player.moveRight()
          break;
      case 40:
          console.log('down');
          break;
  }
};