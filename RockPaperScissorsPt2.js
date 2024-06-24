// Player Hands in The Form of an Array
const hands = ['rock', 'paper', 'scissors'];

// This Function Draws a Random Hand For Each Player
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// Function To Play a Round
function playRound(player1, player2) {
  const hand1 = player1.getHand(); // Gets Player Hands
  const hand2 = player2.getHand();

  let winner = null; // Winner = null if Tie
  if (hand1 === hand2) {
    console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. It's a tie.`); // If Game is a Tie Displays This Message
  } else if ( 
    (hand1 === 'rock' && hand2 === 'scissors') || // Sets Hands and Their Counters
    (hand1 === 'paper' && hand2 === 'rock') ||
    (hand1 === 'scissors' && hand2 === 'paper')
  ) {
    winner = player1;
    console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player1.name} wins!`); // Player1 Win Message
  } else {
    winner = player2;
    console.log(`${player1.name} played ${hand1}, ${player2.name} played ${hand2}. ${player2.name} wins!`); // Player2 Win Message
  }

  return winner; // Returns Winner
}

// Function To Play a Game
function playGame(player1, player2, playUntil) {
  let player1Wins = 0; // Sets Initial Wins to 0
  let player2Wins = 0;

  while (player1Wins < playUntil && player2Wins < playUntil) { // Plays Until Winner is Declared
    const roundWinner = playRound(player1, player2);
    if (roundWinner === player1) {
      player1Wins++;
    } else if (roundWinner === player2) {
      player2Wins++;
    }
  }

  return player1Wins === playUntil ? player1 : player2;
}

// Function To Play a Tournament
function playTournament(player1, player2, player3, player4, playUntil) { // Sets Players 
  console.log(`First round: ${player1.name} vs ${player2.name}`); // Sets First Round
  const finalist1 = playGame(player1, player2, playUntil);
  console.log(`${finalist1.name} won the first round.\n`); // Displays Winner of Round One and Logs It

  console.log(`Second round: ${player3.name} vs ${player4.name}`); // Sets Players 
  const finalist2 = playGame(player3, player4, playUntil); // Sets Second Round
  console.log(`${finalist2.name} won the second round.\n`); // Displays Winner of Round Two and Logs It

  console.log(`Final round: ${finalist1.name} vs ${finalist2.name}`); // Sets Players
  const tournamentWinner = playGame(finalist1, finalist2, playUntil); // Sets Final Round

  console.log(`\n${tournamentWinner.name} is the world champion!`); // Returns Tournament Winner and Displays This Message
  return tournamentWinner;
}

// Test Code
const player1 = { name: 'Player 1', getHand: getHand };
const player2 = { name: 'Player 2', getHand: getHand };
const player3 = { name: 'Player 3', getHand: getHand };
const player4 = { name: 'Player 4', getHand: getHand };

playTournament(player1, player2, player3, player4, 3); // Sets Tournament to Best Out of Three