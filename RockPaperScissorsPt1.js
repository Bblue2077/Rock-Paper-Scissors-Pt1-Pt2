// Player Hands in The Form of an Array
const hands = ['rock', 'paper', 'scissors'];

// This Function Draws a Random Hand For Each Player
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// Players Are Defined as Objects and getHand Functions Are Established 
const player1 = { //Player1 Object Defined with const
  name: 'Player 1', //Object Name
  getHand: getHand //Function
};

const player2 = {
  name: 'Player 2',
  getHand: getHand
};

// Function To Play a Game
function playRound(player1, player2) {
  // This Function Retrieves The Given Randomized Hands From The Players
  const hand1 = player1.getHand();
  const hand2 = player2.getHand();

  // Defines Winner
  let winner = null; //This Function States That The Winner is = to null
  if (hand1 === hand2) { //This Function States That The Winner is = to null if hand1 = hand2
    console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. It's a tie.`); //This Console Log Provides The Results For a Tie
  } else if ( //This else if Command Provides Parameters For The Game Hands and Their Counters (Rock beats scissors, paper beats rock, etc.)
    (hand1 === 'rock' && hand2 === 'scissors') ||
    (hand1 === 'paper' && hand2 === 'rock') ||
    (hand1 === 'scissors' && hand2 === 'paper')
  ) {
    winner = player1; //Function If Player1 Wins
    console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player1.name} wins!`); //Console Log Provides Message Presented if player1 Wins
  } else { //else Command If Player1 Doesn't Win
    winner = player2; //Function If Player2 Wins
    console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player2.name} wins!`); //Console Log Provides Message Presented if player2 Wins
  }

  return winner; //return Command Returns The Winner of The Game
}

// Test Code
const roundWinner = playRound(player1, player2);
console.log('Winner:', roundWinner ? roundWinner.name : 'No winner');