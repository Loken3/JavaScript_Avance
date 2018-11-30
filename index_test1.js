class Carre {
    constructor(){
      this.x=250;
      this.y=10;
    }

    draw(x,y){
      let canvas=document.getElementById('tutorial');
      if(canvas.getContext){
        let ctx=canvas.getContext('2d');
        ctx.fillStyle='rgb(200,0,0)';
        ctx.fillRect(x,y,50,50);
      }
    }

    maj(){
      this.x=this.x-10;
    }

    clear(){
      let canvas=document.getElementById('tutorial');
      if(canvas.getContext){
        let ctx=canvas.getContext('2d');
        ctx.clearRect(this.x,this.y,50,50);
      }
    }
  }

  function pausecomp(millis)
    {
      var date = new Date();
      var curDate = null;
      do {
        curDate = new Date();
      } while(curDate-date < millis);
    }

    function boucle(carre) {
       if(carre.x>0){
         carre.clear();
         carre.maj();
         carre.draw(carre.x,carre.y);
       } else {
         carre.clear();
       }
     }

     var carre1=new Carre();


    function interval1(){
      return boucle(carre1);
    }

var start = null;

function monJeu() {
  var timer;
  timer = setInterval(interval1, 1000);
}

var animFrame = window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          null ;

  var recursiveAnim = function() {
      monJeu();
      animFrame( recursiveAnim );
  };

  // start the mainloop
  animFrame( recursiveAnim );
