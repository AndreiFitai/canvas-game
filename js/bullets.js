var bulletsArr = [];
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var bulletImg = new Image()
bulletImg.src = "images/bullet.png"


// PROJECTILE CONSTRUCTOR
function Projectile(direction) {
  this.height = 4;
  this.width = 6;
  this.posY = player.posY + (player.height / 2);
  this.posX = player.posX + (player.width / 2);
  this.direction = direction;
  ctx.drawImage(bulletImg, this.posX, this.posY, this.width, this.height);
};


function clearArr() {
  for (var x = 0; x < bulletsArr.length; x++) {
    if (bulletsArr[x].posX < 0 || bulletsArr[x].posX > canvasWidth) {
      bulletsArr.splice(x, 1);
    }
  }
}

function clearBullet(index) {
  bulletsArr.splice(index, 1)
}

function moveBullets() {
  for (var x = 0; x < bulletsArr.length; x++) {
    if (bulletsArr[x].direction == "right")
      bulletsArr[x].posX += 5;
    if (bulletsArr[x].direction == "left")
      bulletsArr[x].posX -= 5;
    ctx.drawImage(bulletImg, bulletsArr[x].posX, bulletsArr[x].posY, bulletsArr[x].width, bulletsArr[x].height);
  }
}

function checkIfHit() {
  for (var x = 0; x < bulletsArr.length; x++) {
    for (var j = 0; j < enemiesArr.length; j++) {
      if ((bulletsArr[x].posX >= enemiesArr[j].posX && bulletsArr[x].posX <= enemiesArr[j].posX + enemiesArr[j].width) &&
        (bulletsArr[x].posY >= enemiesArr[j].posY && bulletsArr[x].posY <= enemiesArr[j].posY + enemiesArr[j].height)) {
        clearEnemy(j);
        clearBullet(x);
        score++;
        if (score >= 100)
          startBossFight();
        break;
      }
    }
  }
}

function checkIfBossHit() {
  for (var x = 0; x < bulletsArr.length; x++) {
    if ((bulletsArr[x].posX >= bossArr[0].posX && bulletsArr[x].posX <= bossArr[0].posX + (bossArr[0].width / 2)) &&
      (bulletsArr[x].posY >= bossArr[0].posY && bulletsArr[x].posY <= bossArr[0].posY + (bossArr[0].height / 2))) {
      bossArr[0].explode(bulletsArr[x].posX, bulletsArr[x].posY)
      clearBullet(x);
      bossLife--;
      break;
    }
  }
}


function checkIfHitWall() {
  for (var x = 0; x < bulletsArr.length; x++) {
    for (var j = 0; j < platformArr.length; j++) {
      if ((bulletsArr[x].posX >= platformArr[j].posX && bulletsArr[x].posX <= platformArr[j].posX + platformArr[j].width) &&
        (bulletsArr[x].posY >= platformArr[j].posY && bulletsArr[x].posY <= platformArr[j].posY + platformArr[j].height)) {
        clearBullet(x);
        break;
      }
    }
  }
}