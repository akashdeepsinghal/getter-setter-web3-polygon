const Web3 = require("web3");

const web3 = new Web3("http://127.0.0.1:8545");
const privateKey =
  "0x33a86093e3c48b14f78b2238f2716007b135648315853e9ae193612eecf4d8d7"; // 1st private key after running ganache (look in .ganache)

const myAccount = web3.eth.accounts.wallet.add(privateKey);

module.exports = { web3, myAccount };
