const { web3, myAccount } = require("./utils");
const { abi, address } = require("./contractArtifacts");

let contract = new web3.eth.Contract(JSON.parse(abi), address);

// console.log(contract);

async function get() {
  const num = await contract.methods.get().call();
  console.log(num);
}

async function set(val) {
  const num = await contract.methods.set(val).send({
    from: myAccount.address,
    gas: 800000,
  });
  console.log(num);
}

// set(6);
get();

// for interacting with the browser
// window.addEventListener("load", () => {
//   document.getElementById("get").onclick = () => {
//     get().then((r) => {
//       document.getElementById("resultOfGet").innerHTML = r;
//     });
//   };
//   document.getElementById("set").onclick = () => {
//     val = document.getElementById("value").value;
//     set(val).then((r) => {
//       document.getElementById("resultOfSet").innerHTML = r;
//     });
//   };
// });
