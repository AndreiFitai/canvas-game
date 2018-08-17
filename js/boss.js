var bossFight = false;
var bossLife = 100;
var bossBulletsArr = [];
var bossBullet = new Image();
bossBullet.src = "images/bossbullet.png"
var bossHealthBarr = new Image();
bossHealthBarr.src = "images/bosslife.png"

function startBossFight() {
  bossFight = true;
}


function Boss() {
  this.height = 200;
  this.width = 75;
  this.posX = canvasWidth;
  this.posY = 100;
  this.gravity = 3;
  this.canJump = false;
  this.explode = function (x, y) {
    explosions.push({
      x: x,
      y: y,
      ttl: 10
    })
  }
  this.drawHPBar = function () {
    ctx.drawImage(bossHealthBarr, 150, 30, bossLife * 6, 20)
  }
}

var boss = new Boss();

function moveBoss() {
  if (boss.posX > canvasWidth - 100) {
    boss.posX -= 3
  }
  boss.posY += boss.gravity
  if (boss.gravity < 3) {
    boss.gravity += 0.3
  }
  if (boss.posY + boss.height > 400) {
    boss.posY = 400 - boss.height;
    boss.gravity = 0
    boss.canJump = true
  }
  if (Math.floor(Math.random() * 1000) < 15 && boss.canJump == true) {
    boss.gravity = -(Math.floor((Math.random() * 10) + 2));
    boss.canJump = false;
  }
  ctx.fillRect(boss.posX, boss.posY, boss.width, boss.height)
}

function Bullet(origin) {
  this.height = 30;
  this.width = 30;
  this.posX = boss.posX
  if (origin === "down")
    this.posY = boss.posY + 150
  else
    this.posY = boss.posY + 25
  this.explode = function () {
    explosions.push({
      x: this.posX,
      y: this.posY,
      ttl: 10
    })
  }
}



function createBossBullet() {
  if (updateCounter % 60 == 0) {
    var upOrDown = Math.floor(Math.random() * 10)
    if (upOrDown < 5)
      bossBulletsArr.push(new Bullet("down"))
    else
      bossBulletsArr.push(new Bullet("up"))
  }
}

function moveBossBullets() {
  for (var x = 0; x < bossBulletsArr.length; x++) {
    bossBulletsArr[x].posX -= 5;
    ctx.drawImage(bossBullet, bossBulletsArr[x].posX, bossBulletsArr[x].posY, bossBulletsArr[x].width, bossBulletsArr[x].height);
  }
}

function clearBossBullets(index) {
  bossBulletsArr[index].explode();
  bossBulletsArr.splice(index, 1);
}

function emptyBossBulletArr() {
  for (var x = 0; x < bossBulletsArr.length; x++) {
    if (bossBulletsArr[x].posX + bossBulletsArr[x].width < 0) {
      bossBulletsArr.splice(x, 1);
    }
  }
}

//SETS BOSS LEVEL
function isBossLvlClicked(x, y) {
  return (x > 170 && x < 205) && (y > 130 && y < 168)
}

function setBossLvl() {
  score = 99;
}