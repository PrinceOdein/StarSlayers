const hre = require("hardhat");

async function main() {
  console.log("Deploying StarSlayers token...");

  // Get the contract factory
  const StarSlayersToken = await hre.ethers.getContractFactory("StarSlayersToken");

  // Deploy the contract
  const starSlayers = await StarSlayersToken.deploy();

  // Wait for the contract to be deployed
  await starSlayers.waitForDeployment();

  // Get the deployed contract address
  const starSlayersAddress = await starSlayers.getAddress();

  console.log("StarSlayers token deployed to:", starSlayersAddress);
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });