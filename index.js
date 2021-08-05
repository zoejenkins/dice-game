//sets values for starting points
let pointPlayer1 = 0;
let pointPlayer2 = 0;

//asks player to enter their name and stores it in a variable
let definedName1 = prompt('Player 1, what is your name?')
//sets list of options for random names and saves as a variable
randomName = ['Swagboywastaken420', 'Mikehawk69', 'Hotgirlunicorn', 'Cupcakellama28', 'Tess tickles', '23friendlyblocky', 'Joe mama', 'Minecraftsux', 'PogboyHD_jpg'];
//picks a random name from the list
let pickedrandomName1 = randomName[Math.floor(Math.random() * 8 + 0)];
//sets conditions for when random name is used
if (definedName1 == '') {
  //welcome user with random name to the game
	console.log('Welcome ' + pickedrandomName1 + ' to my number guessing game.');
  //sets conditions from when defined name is used
} else {
  //welcomes user with defined name to the game
	console.log('Welcome ' + definedName1 + ' to my number guessing game.');
}
//repeats above code for player 2 
let definedName2 = prompt('Player 2, what is your name?')
let pickedrandomName2 = randomName[Math.floor(Math.random() * 4 + 0)];
if (definedName2 == '') {
	console.log('Welcome ' + pickedrandomName2 + ' to my number guessing game.');
} else {
	console.log('Welcome ' + definedName2 + ' to my number guessing game.');
}
//sets values for name variables
let name1 = (definedName1 || pickedrandomName1)
let name2 = (definedName2 || pickedrandomName2)

//lets user choose which game mode they want to play
let gameMode = prompt('Do you want to play in rounds or race to get the most points? Please enter either \"round\" or \"race\"')

//sets conditions for if they choose the "round" game option
if (gameMode == "round"){
  //asks how many rounds the user wants to play
let roundNumber = prompt('How many rounds do you want to play?')
//sets the conditions as to what happens if the user does not enter a number
if (isNaN(roundNumber) || roundNumber == null || roundNumber == '' || roundNumber < 0) {
	roundNumber = prompt('How many rounds do you want to play?')
}
//sets value for the variable 'round'
  let round = 1;
  
  //picks random numbers as the rolls for each user
rolled1 = Math.floor(Math.random() * 6 + 1);
rolled2 = Math.floor(Math.random() * 6 + 1);

//starts a loop
do {

//commands user to roll the dice 
	let player1Roll = prompt(name1 + ' type \"roll\" to roll the dice!')
  //sets conditions as to what the user must type to follow instructions and correctly roll the dice
	if (player1Roll == 'roll') {
		console.log(name1 + ', you rolled a ' + rolled1)
	} else {
		let player1Roll = prompt(name1 + ' type \"roll\" to roll the dice!')
	}
  //commands second user to roll the dice
	let player2Roll = prompt(name2 + ' type \"roll\" to roll the dice!')
  //sets conditions as to what the second user must type to follow instructions and correctly roll the dice
	if (player2Roll == 'roll') {
		console.log(name2 + ', you rolled a ' + rolled2)
	} else {
		let player2Roll = prompt(name2 + ' type \"roll\" to roll the dice!')
	}

//sets conditions as to what happens if player1's roll is biggert 
	if (rolled1 > rolled2) {
    //tells the users that player1's roll was bigger
		console.log(name1 + '\'s roll was bigger! ' + name1 + ' wins! Point to them!')
    //adds one point to player1
		pointPlayer1++
    //sets conditions for when player2's roll is bigger
	} else if (rolled2 > rolled1) {
    //tells users that player2 roll is bigger
		console.log(name2 + '\'s roll was bigger. ' + name2 + ' wins! Point to them!')
    //adds point to player 2
		pointPlayer2++
    //sets conditions for when rolls are the same value
	} else if (rolled1 == rolled2) {
    //tells users that rolls are the same
		console.log('It\'s a draw! No points given.')
	}

//increases the value of round by one point
	round++
  //sets the conditions for how many times to repeat the loop
} while (round <= roundNumber)

} else if (gameMode == "race"){

  let pointNumber = prompt('How many points would you like to play to?')
  if (isNaN(pointNumber) || pointNumber == null || pointNumber == '' || pointNumber < 0){
    pointNumber = prompt('How many points would you like to play to?')
  } 
  
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
	
}while(pointPlayer1 < pointNumber && pointPlayer2 < pointNumber)
   
if (pointPlayer1 >= pointNumber){
  console.log(name1 + ' has made it to ' + pointNumber + ' points!')

  console.log(name1 + ' wins!')
} else if (pointPlayer2 >= pointNumber){
  console.log(name2 + ' has made it to ' + pointNumber + ' points!')
}
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