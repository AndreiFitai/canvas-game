//CONTROLS
var up = false;
var down = false;
var left = false;
var right = false;
var shoot = false;
var isMoving = 0;
var bubbleStart = new Image();
bubbleStart.src = "images/speechbubblestart.png"
var bubbleBoss = new Image();
bubbleBoss = "images/speechbubbleboss.png"

//SOUNDS

//PLAYER CHARACTER OBJECT
var player = {
  height: 50,
  width: 20,
  posX: 200,
  posY: 100,
  gravity: 3,
  canJump: false,
  direction: "right",
  startMsg: bubbleStart,
  bossMsg: bubbleBoss,
  moveLeft: function () {
    this.direction = "left"
    if (wallCheckLeft() && this.posX> 50)
      this.posX -= 5
  },

  moveRight: function () {
    this.direction = "right"
    if (this.posX < 450 && wallCheckRight())
      this.posX += 5
    else if (wallCheckRight()) {
      isMoving = 3;
      moveBackgrounds(5);
      movePlatforms(5);
      moveHearts(5)
    }
  },
  moveUp: function () {
    if (this.canJump) {
      this.gravity = -11;
      this.canJump = false;
    }
  },
  moveDown: function () {
    if (this.posY + this.height < calcFloor())
      this.gravity = 8;
  },

  shoot: function () {
    bulletsArr.push(new Projectile(this.direction));
  },

  draw: function () {
    this.posY += this.gravity
    if (this.gravity < 5) {
      this.gravity += 0.4
    }
    if (this.posY + this.height > calcFloor()) {
      this.posY = calcFloor() - this.height;
      this.gravity = 0
      this.canJump = true
    }
    if ( updateCounter < 300){
      ctx.drawImage(bubbleStart,this.posX-15, this.posY-50,180,50)
    }
    ctx.fillRect(this.posX, this.posY, this.width, this.height)

  }
}

var currentPlat = 0;
// CALCULATE CURRENT PLATFORM TOP POSITION
function calcFloor() {
  var tempPos = 0;
  for (var x = 0; x < platformArr.length; x++) {
    if ((player.posX > platformArr[x].posX && player.posX < platformArr[x].posX + platformArr[x].width) ||
      (player.posX + player.width > platformArr[x].posX && player.posX + player.width < platformArr[x].posX + platformArr[x].width)) {
      if (platformArr[x].posY > tempPos)
        tempPos = platformArr[x].posY
      currentPlat = x;
    }
  }
  return tempPos
}

// Check if if player is hitting walls

function wallCheckLeft() {
  if (currentPlat - 1 >= 0){
    if (player.posY + player.height > platformArr[currentPlat - 1].posY && player.posX <= platformArr[currentPlat - 1].posX + platformArr[currentPlat - 1].width) {
      player.posX = platformArr[currentPlat - 1].posX + platformArr[currentPlat - 1].width
      return false
    }
  }
  return true;
}

function wallCheckRight() {
  if (player.posY + player.height > platformArr[currentPlat + 1].posY && player.posX + player.width >= platformArr[currentPlat + 1].posX) {
    player.posX = platformArr[currentPlat + 1].posX - player.width;
    return false;
  }
  return true;
}


var first = 0;

function playerMovement() {
  if (left == true) {
    player.moveLeft();
  }
  if (right == true) {
    player.moveRight();
  }
  else{
    isMoving = 0; //Needed to add extra speed to enemy when bg moves
  }
  if (up == true) {
    player.moveUp();
  }
  if (down == true) {
    player.moveDown();
  }
  if (shoot == true) {
    if (updateCounter % 15 == 0 || first == 0) {
      player.shoot();
      first++;
    }
  }
}

function playerCollision() {
  for (var x = 0; x < enemiesArr.length; x++) {
    if ((enemiesArr[x].posX >= player.posX && enemiesArr[x].posX <= player.posX + player.width) &&
      (enemiesArr[x].posY + enemiesArr[x].height >= player.posY && enemiesArr[x].posY <= player.posY + player.height)) {
      clearEnemy(x);
      lives--;
    }
  }
  // CHECK FOR DEATH AND RESETS PLAYER POS BULLETS/PLATFORMS/ENEMY ARR
  if (player.posY + player.height == 500 || lives == 0) {
    clearInterval(gameInterval)
    lives = 10;
    score = 0;
    player.posX = 200;
    player.posY = 100;
    bulletsArr = [];
    enemiesArr = [];
    platformArr = [];
    heartsArr = [];
    startingPlatforms = true;
    restartGame();
  }
}

function heartCollision(){
  for (let x = 0; x < heartsArr.length; x++) {
    if ((heartsArr[x].posX >= player.posX &&heartsArr[x].posX <= player.posX + player.width) &&
      (heartsArr[x].posY +heartsArr[x].height >= player.posY &&heartsArr[x].posY <= player.posY + player.height)){
        console.log("called")
        lives++;
        destroyHeart(x)
      } 
  }
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      left = true;
      break;
    case 38:
      up = true;
      break;
    case 39:
      right = true;
      break;
    case 40:
      down = true;
      break;
    case 32:
      shoot = true;
      break;
  }
};

document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 37:
      left = false;
      break;
    case 38:
      up = false;
      break;
    case 39:
      right = false;
      break;
    case 40:
      down = false;
      break;
    case 32:
      first = 0;
      shoot = false;
      break;
  }
};


