var Table = require("cli-table");
const { findWinner } = require("./utils");

function logOptions(params) {
  console.log("Available moves:");
  for (let i = 0; i < params.length; i++) {
    console.log(`${i + 1} - ${params[i]}`);
  }
  console.log(`0 - exit`);
  console.log(`? - help`);
}

function logHelpTable(params) {
  var table = new Table({
    head: ["name", ...params],
  });

  const winningCasesCount = Math.floor(params.length / 2);
  let tableData = {};
  for (let i = 0; i < params.length; i++) {
    const newItem = [params[i]];
    for (let j = 0; j < params.length; j++) {
      if (params[i] === params[j]) {
        // newItem[[params[j]]] = "draw";
        newItem.push("Draw");
      } else if (i <= winningCasesCount) {
        newItem[[params[j]]] =
          j > i && j <= i + winningCasesCount
            ? newItem.push("Win")
            : newItem.push("Lose");
      } else {
        newItem[[params[j]]] =
          j < i && j >= i - winningCasesCount
            ? newItem.push("Lose")
            : newItem.push("Win");
      }
    }
    table.push(newItem);
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
