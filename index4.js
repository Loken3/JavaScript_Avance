class Carre {
    constructor(){
      this.x=10;
      this.y=10;
      this.monInterval=setInterval(this.boucle,100);

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
      this.y=this.y+1;
    }

    clear(){
      let canvas=document.getElementById('tutorial');
      if(canvas.getContext){
        let ctx=canvas.getContext('2d');
        ctx.clearRect(this.x,this.y,50,50);
      }
    }
  }

  var carre1=new Carre();
  var carre2=new Carre();
  var carre3=new Carre();

  function boucle(carre){
    if(carre.y<300){
      carre.clear();
      carre.maj();
      carre.draw(carre.x,carre.y);
    } else {
      carre.clear();
      carre.x=10;
      carre.y=10;
    }
  }

  function interval1(){
    return boucle(carre1);
  }

  function interval2(){
    return boucle(carre2);
  }

  function interval3(){
    return boucle(carre3);
  }

  var c1=setTimeout("setInterval(interval1,10)",4000);
  var c2=setTimeout("setInterval(interval2,10)",5000);
  var c3=setTimeout("setInterval(interval3,10)",6000);

