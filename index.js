let definedName1 = prompt('Player 1, what is your name?')
randomName = ['swagboywastaken420', 'mikehawk69', 'hotgirlunicorn', 'cupcakellama28', 'tess tickles', '23friendlyblocky', 'joe mama', 'minecraftsux', 'pogboyHD_jpg'];
let pickedrandomName1 = randomName[Math.floor(Math.random() * 8 + 0)];
if (definedName1 == '') {
	console.log('Welcome ' + pickedrandomName1 + ' to my number guessing game.');
} else {
	console.log('Welcome ' + definedName1 + ' to my number guessing game.');
}
let definedName2 = prompt('Player 2, what is your name?')
let pickedrandomName2 = randomName[Math.floor(Math.random() * 4 + 0)];
if (definedName2 == '') {
	console.log('Welcome ' + pickedrandomName2 + ' to my number guessing game.');
} else {
	console.log('Welcome ' + definedName2 + ' to my number guessing game.');
}
let name1 = (definedName1 || pickedrandomName1)
let name2 = (definedName2 || pickedrandomName2)

let gameMode = prompt('Do you want to play in rounds or race to get the most points? Please enter either \"round\" or \"race\"')

if (gameMode == "round"){
let roundNumber = prompt('How many rounds do you want to play?')
if (isNaN(roundNumber) || roundNumber == null || roundNumber == '' || roundNumber < 0) {
	roundNumber = prompt('How many rounds do you want to play?')
}
  let round = 1;
  
rolled1 = Math.floor(Math.random() * 6 + 1);
rolled2 = Math.floor(Math.random() * 6 + 1);

do {

	let player1Roll = prompt(name1 + ' type \"roll\" to roll the dice!')
	if (player1Roll == 'roll') {
		console.log(name1 + ', you rolled a ' + rolled1)
	} else {
		let player1Roll = prompt(name1 + ' type \"roll\" to roll the dice!')
	}
	let player2Roll = prompt(name2 + ' type \"roll\" to roll the dice!')
	if (player2Roll == 'roll') {
		console.log(name2 + ', you rolled a ' + rolled2)
	} else {
		let player2Roll = prompt(name2 + ' type \"roll\" to roll the dice!')
	}

	if (rolled1 > rolled2) {
		console.log(name1 + '\'s roll was bigger! ' + name1 + ' wins! Point to player 1!')
		pointPlayer1++
	} else if (rolled2 > rolled1) {
		console.log(name2 + '\'s roll was bigger. ' + name2 + ' wins! Point to player 2!')
		pointPlayer2++
	} else if (rolled1 == rolled2) {
		console.log('It\'s a draw! No points given.')
	}

	round++
} while (round <= roundNumber)

} else if (gameMode == "race"){
  let pointNumber = prompt('How many points would you like to play to?')
  if (isNaN(pointNumber) || pointNumber == null || pointNumber == '' || pointNumber < 0){
    pointNumber = prompt('How many points would you like to play to?')
  } 

//sets values for starting points
let pointPlayer1 = 0;
let pointPlayer2 = 0;
  
//randomises values for dice rolls
  rolled3 = Math.floor(Math.random() * 6 + 1);
  rolled4 = Math.floor(Math.random() * 6 + 1);

//starts loop
  do {

//commands player 1 to roll the dice
	let player1Roll = prompt(name1 + ' type \"roll\" to roll the dice!')

//sets what will happen if player rolls correctly
	if (player1Roll == 'roll') {
		console.log(name1 + ', you rolled a ' + rolled3)
	} else {

//asks player to roll again if they roll dice incorrectly
		let player1Roll = prompt(name1 + ' type \"roll\" to roll the dice!')
	}

//commands player 2 to roll dice
	let player2Roll = prompt(name2 + ' type \"roll\" to roll the dice!')
	
//sets what will happen if player rolls correctly
  if (player2Roll == 'roll') {
		console.log(name2 + ', you rolled a ' + rolled4)
	} else {

//asks player to roll again if they roll dice incorrectly
		let player2Roll = prompt(name2 + ' type \"roll\" to roll the dice!')
	}

	if (rolled3 > rolled4) {
		console.log(name1 + '\'s roll was bigger! ' + name1 + ' wins! Point to player 1!')
		pointPlayer1++
	} else if (rolled4 > rolled3) {
		console.log(name2 + '\'s roll was bigger. ' + name2 + ' wins! Point to player 2!')
		pointPlayer2++
	} else if (rolled1 == rolled2) {
		console.log('It\'s a draw! No points given.')
	}
	
} while (pointPlayer1 <= pointNumber || pointPlayer2 <= pointNumber)
} else {
  gameMode = prompt('Please enter either \"round\" or \"race\"')
}




console.log('Game over!')
console.log(name1 + ' total number of points: ' + pointPlayer1)
console.log(name2 + ' total number of points: ' + pointPlayer2)

if (pointPlayer1 > pointPlayer2) {
	console.log(name1 + ' wins!')
} else if (pointPlayer1 < pointPlayer2) {
	console.log(name2 + ' wins!')
} else {
	console.log("It's a draw!")
}

