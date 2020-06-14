const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(timestamp, data, previousHash) {
    this.timestamp = timestamp; // Created time
    this.data = data; // Something
    this.previousHash = previousHash; // for chaining

    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;
