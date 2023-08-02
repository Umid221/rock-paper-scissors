function isArgsValid(moves) {
  const uniqueMoves = Array.from(new Set(moves));

  if (moves.length < 3) {
    console.log(`You have entered ${moves.length} arguments.`);
    console.log("You must provide at least 3 arguments");
    return false;
  } else if (moves.length % 2 === 0) {
    console.log("you must provide odd number of arguments");
    return false;
  } else if (moves.length !== uniqueMoves.length) {
    console.log("You must provide non-repeating strings as arguments");
    return false;
  }
  return true;
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
  findWinner,
};
