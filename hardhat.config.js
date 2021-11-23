require("@nomiclabs/hardhat-waffle");

const projectId = "1cab8083a5cb497eba24e43366944c9a"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337 // config standard
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: []
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: []
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true, 
        runs: 200
      }
    }
  }
};
