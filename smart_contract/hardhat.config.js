require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UNJIqJWZn3dANKjvfGL47X2HvD46uJyN',
      accounts: ['04fcd1a2edfa56f211b78f67b6ca6aa5431585674e7645618645c96cf8415fa6'],
    },
  },
};