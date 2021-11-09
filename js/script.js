/**
  Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
  Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

const boxNumber = document.getElementById('box-number');
const text = document.querySelector('p');

//array dei numeri random
let arrRandomNumber = [];

//array numeri indovinati
let arrGuessedNumbers = [];

//visualizzare in pagine 5 numeri random
for(let i=0; i<5; i++){


  if(!arrRandomNumber.includes(getRandomNumber(1,100))){
    const spanElement = document.createElement('span');

    spanElement.className = 'me-3';
  
    boxNumber.append(spanElement);

    arrRandomNumber.push(getRandomNumber(1,100));
    spanElement.innerHTML = arrRandomNumber[i];
  }else{
    i--;
    console.log('numero ripetuto',arrRandomNumber[i]);
  }
  

  

  
}


//far partire un timer di 30s
setTimeout((userNumbers), 30000)


/*****FUNZIONI */
//creare numeri random fra 1 e 100
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//1. chiedere all'utente di inserire 5 volte un numero
//2. se arr numeri casuali include numero utente pushare in arr numeri indovinati solo se non è già esistente in arr numeri indovinati

function userNumbers(){
  for(let i = 0; i < 5; i++){
    const userNumber = parseInt(prompt('Inserisci un numero'));

    console.log(arrRandomNumber);
    console.log(userNumber);
    if(arrRandomNumber.includes(parseInt(userNumber)) && !(arrGuessedNumbers.includes(parseInt(userNumber)))){
      arrGuessedNumbers.push(userNumber);
    }

   
  }
  console.log(arrGuessedNumbers);
  boxNumber.innerHTML = arrGuessedNumbers;
  textTemplate();
}


// se arrGuessedNumbers è diverso da 0 allora scrivi hai indovinato arr.lenght numeri 
// altrimenti scrivi non hai indovinato nessun numero
function textTemplate(){
  if(arrGuessedNumbers.length !== 0){
    text.innerHTML = `Hai indovinato ${arrGuessedNumbers.length} numeri:`;
  }else{
    text.innerHTML = `Purtroppo non hai indovinato nessun numero`;
    boxNumber.innerHTML = 'RITENTA!'
  }
}


