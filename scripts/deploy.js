const {ethers} = require("hardhat")

async function main(){
  const getContract = await ethers.getContractFactory("CryptoDev")

  const deployContract = await getContract.deploy(10)

  await deployContract.deployed()

  console.log(deployContract.address)
}

main().then(()=>{
  console.log("Contract deployed")
  process.exit(0)
}).catch((error)=>{
  console.log(error)
  process.exit(1)
})