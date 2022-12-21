# getter-setter
Web3 based Getter/Setter in Solidity, Ethereum, Ganache, Web3.js

<img width="604" alt="Web 3 0 based Getter:Setter in Solidity" src="https://user-images.githubusercontent.com/4313602/208900882-116c190b-6ef7-48df-aa87-afbef54b032a.png">

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Ganache](https://trufflesuite.com/ganache/) (Development Framework)
- [Web3.js](https://web3js.readthedocs.io/en/v1.8.1/) (Blockchain Interaction)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Start Hardhat node
`$ ganache`

### 4. Create .ganache file [Optional]
- Copy the response to .ganache
- Copy 1st Private key to `utils.js -> privateKey`

### 5. Create ABI and Bin
In a separate terminal execute:
- `$ solcjs SimpleStorage.sol --abi`
- `$ solcjs SimpleStorage.sol --bin`

Copy the content of .bin file to bytecode and .abi file to abi in `contractArtifacts.js` file

Note that: Please add '0x' in the beginning of the value of bytecode property.

### 6. Deploy the contract
`$ node deploy.js`
As a response from this step, we get the contractAddress. Copy this in `contractArtifacts.js` file


### 7. Create the bundle for frontend interaction
`$ browserify interact.js > bundle.js`
We now have the latest bundle.js which is imported in index.html

Now open the index.html in the browser. We should be good to go.

## Stay in touch
- Author - [Akash Singhal](https://akashsinghal.simple.ink/)

### Credits
Big Thanks to [Team Polygon](https://www.youtube.com/watch?v=QAO7YxF7hSk) and [Angela](https://github.com/angelagilhotra)!
