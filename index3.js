
var intervalID;
var x = 10;
var y = 10;


function draw(x,y) {
  let canvas = document.getElementById('tutorial');
  if(x > 240)
  {
    clearInterval(intervalID);
  }
  if(canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(x, y, 50, 50);
  }
}

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
  clear();
  maj();
  draw(x,y);
}

function start() {
  var intervalID = setInterval(boucle,100);
}


setTimeout(start,2000);
