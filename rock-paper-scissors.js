#!/usr/bin/env node
const readline = require("readline");
const { generateAndCalculateHMAC, generateRandomKey } = require("./security");
const { logOptions, logHelpTable } = require("./loggers");
const { getComputerMove, isArgsValid } = require("./utils");

const moves = process.argv.slice(2);

async function getUserInput() {
  console.log("---New Game Started---");
  const hmacKey = generateRandomKey();
  const computerMove = getComputerMove(moves);

  await generateAndCalculateHMAC(hmacKey, computerMove).then((res) => {
    console.log("HMAC: " + res);
  });
  logOptions(moves);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter your move: ", (userMove) => {
    if (userMove === "0") {
      console.log("Bye!");
      rl.close();
      process.exit(0);
    } else if (userMove === "?") {
      logHelpTable(moves);
    } else if (Number(userMove) <= moves.length && Number(userMove) > 0) {
      logResult(Number(userMove) - 1, computerMove, moves, hmacKey);
    } else {
      console.log("Invalid input. Please enter one of the given options.\n");
    }

    rl.close();
    getUserInput();
  });
}

if (isArgsValid(moves)) {
  getUserInput();
} else {
  console.log(
    "Example of correct usage: \nnode rock-paper-scissors.js Rock Paper Scissors"
  );
}
