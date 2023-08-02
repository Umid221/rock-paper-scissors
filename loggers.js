var Table = require("cli-table");
const { findWinner } = require("./utils");

function logOptions(moves) {
  console.log("Available moves:");
  moves.forEach((move, index) => console.log(`${index + 1} - ${move}`));
  console.log(`0 - exit`);
  console.log(`? - help`);
}

function logHelpTable(moves) {
  var table = new Table({
    head: ["v PC\\User >", ...moves],
  });

  const halfMoves = Math.floor(moves.length / 2);
  for (let i = 0; i < moves.length; i++) {
    const newRow = [moves[i]];
    for (let j = 0; j < moves.length; j++) {
      if (moves[i] === moves[j]) {
        newRow.push("Draw");
      } else if (i <= halfMoves) {
        newRow[[moves[j]]] =
          j > i && j <= i + halfMoves
            ? newRow.push("Win")
            : newRow.push("Lose");
      } else {
        newRow[[moves[j]]] =
          j < i && j >= i - halfMoves
            ? newRow.push("Lose")
            : newRow.push("Win");
      }
    }
    table.push(newRow);
  }

  console.log(table.toString());
}

function logResult(userMoveIndex, computerMove, moves, hmacKey) {
  console.log("Your move:", moves[userMoveIndex]);
  console.log("Computer's move:", computerMove);
  console.log(findWinner(userMoveIndex, computerMove, moves));
  console.log(`HMAC key: ${hmacKey}\n`);
}

module.exports = { logOptions, logHelpTable, logResult };
