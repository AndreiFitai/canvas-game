var enemiesArr = []

function Enemy() {
  this.height = 35;
  this.width = 15;
  this.posX = canvasWidth;
  this.posY = 315 - Math.floor(Math.random()*100);
  this.gravity = 3;
  this.canJump = true;
}

function createEnemy() {
  if ((Math.floor(Math.random() * 1000) < 35) && enemiesArr.length <= 8)
    enemiesArr.push(new Enemy())
}

function clearEnemies() {
  for (var x = 0; x < enemiesArr.length; x++) {
    if (enemiesArr[x].posX < 0) {
      enemiesArr.splice(x, 1);
    }
  }
}

function clearEnemy(index) {
  enemiesArr.splice(index, 1)
}

function moveEnemies() {
  for (var x = 0; x < enemiesArr.length; x++) {
    enemiesArr[x].posX -= 6.5 ;
    enemiesArr[x].posY += enemiesArr[x].gravity
    if (enemiesArr[x].gravity < 3) {
      enemiesArr[x].gravity += 0.3
    }
    if (enemiesArr[x].posY + enemiesArr[x].height > platform.posY) {
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