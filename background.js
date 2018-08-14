var img = new Image();
img.src = "/images/backgrounds/glacial_mountains.png";

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var backgrounds = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    console.log('bg1',this.posX)
    console.log('bg2',this.posX2)
    ctx.drawImage(img,this.posX,0, this.width, this.height)
    ctx.drawImage(img,this.posX2,0, this.width, this.height);
  },
  move: function(){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= 5;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= 5;
  }
}