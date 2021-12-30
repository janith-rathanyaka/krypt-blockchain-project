require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/UNJIqJWZn3dANKjvfGL47X2HvD46uJyN',
      accounts: ['66def9003b2ad53fcd5e20a0bb119fb9efa86eec55418ec49551569f3158f8eb'],
    },
  },
};