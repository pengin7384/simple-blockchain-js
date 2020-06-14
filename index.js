const Block = require('./block');
const Blockchain = require('./blockchain');
const time = require('./time');
const simpleCoin = new Blockchain('Simple');

function main() {
  simpleCoin.addBlock(new Block(time.getCurrentTime(), { amount: 10 }));
  simpleCoin.addBlock(new Block(time.getCurrentTime(), { amount: 20 }));
  simpleCoin.addBlock(new Block(time.getCurrentTime(), { amount: 30 }));

  console.log(simpleCoin.isChainValid());
  simpleCoin.chain[1].data = { amount: 50 };
  console.log(simpleCoin.isChainValid());
}


main();
