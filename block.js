const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(timestamp, data, previousHash) {
    this.timestamp = timestamp; // Created time
    this.data = data; // Something
    this.previousHash = previousHash; // for chaining

    this.hash = 'none';
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join('0');

    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }

    console.log(`Block Mined: ${this.nonce}, ${this.hash}`);
  }
}

module.exports = Block;
