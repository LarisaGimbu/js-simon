/**
  Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
  Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

const boxNumber = document.getElementById('box-number');

for(let i=0; i<5; i++){

  const spanElement = document.createElement('span');

  spanElement.className = 'me-3';

  boxNumber.append(spanElement);
  spanElement.innerHTML += getRandomNumber(1,100);

  console.log(spanElement);
}


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}