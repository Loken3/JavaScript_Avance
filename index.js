
var intervalID;
var compteur = 10;

function initCompteur() {
  intervalID = setInterval(decremCompteur, 1000);
}

function decremCompteur() {
  let elem = document.getElementById("monDiv");
  elem.innerHTML = compteur;
  compteur--;
  if(compteur < 0)
  {
    clearInterval(intervalID);
  }
}


initCompteur();
decremCompteur();
