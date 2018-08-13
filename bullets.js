var bulletsArr = []

// PROJECTILE CONSTRUCTOR
function Projectile(direction) {
  this.height = 2;
  this.width = 5;
  this.posY = player.posY+(player.height/2);
  this.posX = player.posX+(player.width/2);
  this.direction = direction;
  ctx.fillRect(this.posX,this.posY,this.width,this.height)
};


function clearArr(array){
  for ( var x = 0; x < array.length; x++){
    if ( array[x].posX < 0 || array[x].posX > 600 ){
      array.splice(x,1);
    }
  }
}

function clearBullet(index){
  bulletsArr.splice(index,1)
}

function moveBullets(array) {
  for (var x = 0; x < array.length; x++) {
    if (array[x].direction == "right")
      array[x].posX += 5;
    if (array[x].direction == "left")
      array[x].posX -= 5;
    ctx.fillRect(array[x].posX, array[x].posY, array[x].width, array[x].height);
  }
}

function checkIfHit(bullets, enemies){
  for ( var x = 0; x < bullets.length; x++){
    for ( var j = 0; j < enemies.length; j++){
      if ( (bullets[x].posX >= enemies[j].posX && bullets[x].posX <= enemies[j].posX+enemies[j].width) 
      && (bullets[x].posY >= enemies[j].posY && bullets[x].posY <= enemies[j].posY+enemies[j].height)){
        clearEnemy(j);
        clearBullet(x);
        score++;
        break;
      }
    }
  }
}