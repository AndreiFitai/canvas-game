var enemiesArr = []

function Enemy() {
  this.height = 35;
  this.width = 15;
  this.posX = 600;
  this.posY = 315;
  this.gravity = 3;
  this.canJump = true;
}

function createEnemy() {
  if ((Math.floor(Math.random() * 1000) < 25) && enemiesArr.length <= 7)
    enemiesArr.push(new Enemy)
}

function clearEnemies(array) {
  for (var x = 0; x < array.length; x++) {
    if (array[x].posX < 0) {
      array.splice(x, 1);
    }
  }
}

function clearEnemy(index) {
  enemiesArr.splice(index, 1)
}

function moveEnemies(array) {
  for (var x = 0; x < array.length; x++) {
    array[x].posX -= 3;
    array[x].posY += array[x].gravity
    if (array[x].gravity < 3) {
      array[x].gravity += 0.3
    }
    if (array[x].posY + array[x].height > background.posY) {
      array[x].gravity = 0
      canJump = true
    }
    if (Math.floor(Math.random() * 1000) < 25 && array[x].canJump == true) {
      array[x].gravity = -(Math.floor((Math.random()*10)+5));
      array[x].canJump = false;
    }
    ctx.fillRect(array[x].posX, array[x].posY, array[x].width, array[x].height)
  }
}