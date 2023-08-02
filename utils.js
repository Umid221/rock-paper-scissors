function isArgsValid(args) {
  const uniqueArgs = Array.from(new Set(args));

  if (args.length < 3) {
    console.log(`You have entered ${args.length} arguments.`);
    console.log("You must provide at least 3 arguments");
    return false;
  } else if (args.length % 2 === 0) {
    console.log("you must provide odd number of arguments");
    return false;
  } else if (args.length !== uniqueArgs.length) {
    console.log("You must provide non-repeating strings as arguments");
    return false;
  }
  return true;
}

function getComputerMove(moves) {
  const randomIndex = crypto.randomInt(0, moves.length);
  return moves[randomIndex];
}

function findWinner(playerMoveIndex, computerMove, moves) {
  const computerIndex = moves.indexOf(computerMove);
  const halfMoves = Math.floor(moves.length / 2);
  if (playerMoveIndex === computerIndex) {
    return "Draw!";
  } else if (playerMoveIndex <= halfMoves) {
    return computerIndex > playerMoveIndex &&
      computerIndex <= playerMoveIndex + halfMoves
      ? "you win"
      : "you lose";
  } else {
    return computerIndex < playerMoveIndex &&
      computerIndex >= playerMoveIndex - halfMoves
      ? "you lose"
      : "you win";
  }
}

module.exports = {
  isArgsValid,
  getComputerMove,
  findWinner,
};
