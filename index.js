let pointPlayer1 = 0;
let pointPlayer2 = 0;

let play = prompt('Do you want to play the lucky dice game?')

if (play == 'yes'){
  console.log
}

let definedName1 = prompt('Player 1, what is your name?')
  randomName = ['swagboywastaken420', 'mikehawk69', 'hotgirlunicorn', 'cupcakellama28', 'tess tickles', '23friendlyblocky', 'joe mama', 'minecraftsux'];
  let pickedrandomName1 = randomName[Math.floor(Math.random() * 8 + 0)];
  if (definedName1 == ''){
    console.log('Welcome ' + pickedrandomName1 + ' to my number guessing game.');
  }else{
     console.log('Welcome ' + definedName1 + ' to my number guessing game.');
  }
  let definedName2 = prompt('Player 2, what is your name?')
  let pickedrandomName2 = randomName[Math.floor(Math.random() * 4 + 0)];
  if (definedName2 == ''){
    console.log('Welcome ' + pickedrandomName2 + ' to my number guessing game.');
  }else{
     console.log('Welcome ' + definedName2 + ' to my number guessing game.');
  }
let name1 = (definedName1 || pickedrandomName1) 
let name2 = (definedName2 || pickedrandomName2) 



play();
function play(){
do{
  let player1Roll = 
}
}