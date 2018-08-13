var bulletsArr = []

// PROJECTILE CONSTRUCTOR
function Projectile(direction) {
  this.height = 2;
  this.width = 5;
  this.posY = player.posY+5;
  this.posX = player.posX+2;
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

function moveBullets(array){
  for ( var x = 0; x < array.length; x++){
    if ( array[x].direction == "right")
      array[x].posX += 5;
    if ( array[x].direction == "left")
      array[x].posX -= 5;
    ctx.fillRect(array[x].posX,array[x].posY,array[x].width,array[x].height)
  }
}
