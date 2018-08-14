var enemiesArr = []

function Enemy() {
  this.height = 35;
  this.width = 15;
  this.posX = canvasWidth;
  this.posY = calcFloorEnemies(this) - Math.floor(Math.random()*100);
  this.gravity = 3;
  this.canJump = true;
  this.currentPlat = 0;
}

function createEnemy() {
  if ((Math.floor(Math.random() * 1000) < 35) && enemiesArr.length <= 8)
    enemiesArr.push(new Enemy())
}

function clearEnemies() {
  for (var x = 0; x < enemiesArr.length; x++) {
    if (enemiesArr[x].posX+enemiesArr[x].width < 0) {
      enemiesArr.splice(x, 1);
    }
    if (enemiesArr[x].posY + enemiesArr[x].height == 500) {
      enemiesArr.splice(x,1);
    }
  }
}

function clearEnemy(index) {
  enemiesArr.splice(index, 1)
}

function moveEnemies() {
  for (var x = 0; x < enemiesArr.length; x++) {
    var floor = calcFloorEnemies(enemiesArr[x]);
    if(wallCheckEnemy(enemiesArr[x])){
      enemiesArr[x].posX -= 5 + isMoving ;
    }
    enemiesArr[x].posY += enemiesArr[x].gravity
    if (enemiesArr[x].gravity < 3) {
      enemiesArr[x].gravity += 0.3
    }
    if (enemiesArr[x].posY + enemiesArr[x].height > floor ){
      enemiesArr[x].posY = floor - enemiesArr[x].height;
      enemiesArr[x].gravity = 0
      enemiesArr[x].canJump = true
    }
    if (Math.floor(Math.random() * 1000) < 25 && enemiesArr[x].canJump == true) {
      enemiesArr[x].gravity = -(Math.floor((Math.random()*10)+3));
      enemiesArr[x].canJump = false;
    }
    ctx.fillRect(enemiesArr[x].posX, enemiesArr[x].posY, enemiesArr[x].width, enemiesArr[x].height)
  }
}

function wallCheckEnemy(enemy) {
  if (enemy.currentPlat-1 >= 0){
    if (enemy.posY + enemy.height > platformArr[(enemy.currentPlat) - 1].posY && enemy.posX <= platformArr[(enemy.currentPlat) - 1].posX + platformArr[(enemy.currentPlat) - 1].width) {
      enemy.posX = platformArr[(enemy.currentPlat) - 1].posX + platformArr[(enemy.currentPlat) - 1].width
      return false
    }
  }
  return true;
}

function calcFloorEnemies(enemy) {
  var tempPos = 0;
  for (var x = 0; x < platformArr.length; x++) {
    if ((enemy.posX > platformArr[x].posX && enemy.posX < platformArr[x].posX + platformArr[x].width) ||
      (enemy.posX + enemy.width > platformArr[x].posX && enemy.posX + enemy.width < platformArr[x].posX + platformArr[x].width)) {
      if (platformArr[x].posY > tempPos)
        tempPos = platformArr[x].posY
        enemy.currentPlat = x;
    }
  }
  return tempPos
}