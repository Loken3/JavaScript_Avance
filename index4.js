
var intervalID;
var x = 10;
var y = 10;
var canvas = document.getElementById('tutorial');
var ctx =  canvas.getContext('2d');

class Square {
  constructor(x0,y0) {
    this.x = x0;
    this.y = y0;
    this.clear = function() {
      ctx.clearRect(this.x,this.y,50,50);
    };
  };

  this.update = function() {
    this.x = this.x+1;
    this.y = this.y+1;
  };

  this.draw = function() {
    console.log(this.x+','+this.y);
    ctx.fillRect(this.x,this.y,50,50);
    ctx.fillStyle = 'rgb(200, 0, 0)';
  };
}

/*
function draw(x,y) {
  let canvas = document.getElementById('tutorial');
  if(x > 240)
  {
    clearInterval(intervalID);
  }
  if(canvas.getContext) {

  }
}*/

function maj() {
  x = x+1;
}

function clear() {
  let canvas = document.getElementById('tutorial');
  if(canvas.getContext) {
    let ctx =  canvas.getContext('2d');
    ctx.clearRect(x,y,50,50);
  }
}

function boucle() {
  var monCarre = new Square(30,30);

  monCarre.clear();
  monCarre.update();
  monCarre.draw(x,y);
}

function start() {
  var intervalID = setInterval(boucle,100);
}


setTimeout(start,2000);
