var bulletsArr = [];
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

// PROJECTILE CONSTRUCTOR
function Projectile(direction) {
  this.height = 2;
  this.width = 5;
  this.posY = player.posY+(player.height/2);
  this.posX = player.posX+(player.width/2);
  this.direction = direction;
  ctx.fillRect(this.posX,this.posY,this.width,this.height)
};


function clearArr(){
  for ( var x = 0; x < bulletsArr.length; x++){
    if ( bulletsArr[x].posX < 0 || bulletsArr[x].posX > canvasWidth ){
      bulletsArr.splice(x,1);
    }
  }
}

function clearBullet(index){
  bulletsArr.splice(index,1)
}

function moveBullets() {
  for (var x = 0; x < bulletsArr.length; x++) {
    if (bulletsArr[x].direction == "right")
      bulletsArr[x].posX += 5;
    if (bulletsArr[x].direction == "left")
      bulletsArr[x].posX -= 5;
    ctx.fillRect(bulletsArr[x].posX, bulletsArr[x].posY, bulletsArr[x].width, bulletsArr[x].height);
  }
}

function checkIfHit(){
  for ( var x = 0; x < bulletsArr.length; x++){
    for ( var j = 0; j < enemiesArr.length; j++){
      if ( (bulletsArr[x].posX >= enemiesArr[j].posX && bulletsArr[x].posX <= enemiesArr[j].posX+enemiesArr[j].width) 
      && (bulletsArr[x].posY >= enemiesArr[j].posY && bulletsArr[x].posY <= enemiesArr[j].posY+enemiesArr[j].height)){
        clearEnemy(j);
        clearBullet(x);
        score++;
        break;
      }
    }
  }
}