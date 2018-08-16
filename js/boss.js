var bossFight = false;
var bossLife = 100;
var bossHealthBarr = new Image();
bossHealthBarr.src = "images/bosslife.png"

function startBossFight(){
  bossFight = true;
}


function Boss() {
  this.height = 200;
  this.width = 75;
  this.posX = canvasWidth-45;
  this.posY = 200;
  this.explode = function(x,y) {
    explosions.push({
      x: x,
      y: y,
      ttl: 10
    })
  }
  this.draw = function(){
    ctx.fillRect(this.posX,this.posY,this.width,this.height)
    ctx.drawImage(bossHealthBarr,150,30,bossLife*6,20)
  }

}

var boss = new Boss();

