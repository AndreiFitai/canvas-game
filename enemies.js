var enemiesArr = []

function Enemy(){
  this.height = 35;
  this.width = 15;
  this.posX = 600;
  this.posY = 315;
  this.gravity = 3;
}

function createEnemy(){
  if ( (Math.floor(Math.random()*1000) < 25) && enemiesArr.length <= 5 )
    enemiesArr.push(new Enemy)
}

function clearEnemies(array){
  for ( var x = 0; x < array.length; x++){
    if ( array[x].posX < 0){
      array.splice(x,1);
    }
  }
}

function moveEnemies(array){
  for ( var x = 0; x < array.length; x++){
      array[x].posX -= 3;
    ctx.fillRect(array[x].posX,array[x].posY,array[x].width,array[x].height)
  }
}
