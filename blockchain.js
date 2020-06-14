const Block = require('./block');
const time = require('./time');

class Blockchain {
  constructor(name) {
    this.chain = [];
    this.name = name;
    this.difficulty = 4;

    this.addGenesisBlock();
  }

  addGenesisBlock() {
    const genesisBlock = new Block(time.getCurrentTime(), 'Genesis Block', '0');
    genesisBlock.mineBlock(this.difficulty);
    this.chain.push(genesisBlock);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.calculateHash()) {
        return false;
      }

      return true;
    }
  }
}

module.exports = Blockchain;
