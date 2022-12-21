const { web3, myAccount } = require("./utils");
const { abi, address } = require("./contractArtifacts");

let contract = new web3.eth.Contract(JSON.parse(abi), address);

async function get() {
  const num = await contract.methods.get().call();
  console.log(num);
  return num;
}

async function set(val) {
  const transaction = await contract.methods.set(val).send({
    from: myAccount.address,
    gas: 800000,
  });
  console.log(transaction);
  return transaction.transactionHash;
}

// for interacting with the browser
window.addEventListener("load", () => {
  const getValue = () => {
    get().then((r) => {
      document.getElementById("resultOfGet").innerHTML = r;
    });
  };

  document.getElementById("get").onclick = () => {
    getValue();
  };
  document.getElementById("set").onclick = () => {
    val = document.getElementById("value").value;
    set(val).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r;
      getValue();
    });
  };
});
