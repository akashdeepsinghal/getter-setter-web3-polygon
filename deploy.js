const { web3, myAccount } = require("./utils");
const { bytecode } = require("./contractArtifacts");

async function deploy() {
  await web3.eth
    .sendTransaction({
      from: myAccount.address,
      gas: 800000,
      data: bytecode,
    })
    .on("receipt", console.log);

  //   console.log(r);
}

deploy();
