 var canvasWidth = 650;
 var canvasHeight = 350;

 var spriteWidth = 440;
 var spriteHeight = 40;

 var rows = 1;
 var cols = 10;

 var width = spriteWidth/cols;

 var height = spriteHeight/rows;

 var curFrame = 0;

 var frameCount = 10;

 var x=0;
 var y=0;

 var srcX=0;
 var srcY=0;

 var speed = 12;

 var canvas = document.getElementById('tutorial');

 canvas.width = canvasWidth;
 canvas.height = canvasHeight;

 var ctx = canvas.getContext("2d");
 var monSprite = new Image();
 monSprite.src = " coin-sprite.png";

 function updateFrame() {
   curFrame = ++curFrame % frameCount;
   srcX = curFrame * width;
}

function draw() {
  updateFrame();
  ctx.clearRect(x,y,width,height);
  ctx.drawImage(monSprite,srcX,srcY,width,height,x,y,width,height);
}
setInterval(draw,100);
