require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `${process.env.PUBLIC_URL}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }

}