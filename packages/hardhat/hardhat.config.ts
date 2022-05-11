import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

import { getRpcUrl, getAccountPrivateKey } from "./utils";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  namedAccounts: {
    // used by hardhat-deploy task to assign a name to account[0] which is used as deployer
    deployer: 0,
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: getRpcUrl("localhost"),
    },
    mainnet: {
      url: getRpcUrl("mainnet"),
      accounts: [getAccountPrivateKey("mainnet")],
    },
    ropsten: {
      url: getRpcUrl("ropsten"),
      accounts: [getAccountPrivateKey("ropsten")],
    },
    kovan: {
      url: getRpcUrl("kovan"),
      accounts: [getAccountPrivateKey("kovan")],
    },
    rinkeby: {
      url: getRpcUrl("rinkeby"),
      accounts: [getAccountPrivateKey("rinkeby")],
    },
    goerli: {
      url: getRpcUrl("goerli"),
      accounts: [getAccountPrivateKey("goerli")],
    },
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
