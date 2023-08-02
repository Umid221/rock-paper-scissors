const crypto = require("crypto");

function generateRandomKey() {
  return crypto.randomBytes(32).toString("hex");
}

function getComputerMove(moves) {
  const randomIndex = crypto.randomInt(0, moves.length);
  return moves[randomIndex];
}

function calculateHMAC_SHA3_256(key, data) {
  const hmac = crypto.createHmac("sha3-256", key);
  hmac.update(data);
  return hmac.digest("hex");
}

async function generateAndCalculateHMAC(key, move) {
  try {
    const hmacSHA3_256 = calculateHMAC_SHA3_256(key, move);
    return hmacSHA3_256;
  } catch (error) {
    console.error("Error: ", error.message);
  }
}

module.exports = {
  generateAndCalculateHMAC,
  generateRandomKey,
  getComputerMove,
};
