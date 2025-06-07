const hre = require("hardhat");

async function main() {

  const Factory = await hre.ethers.deployContract("AccountFactory");
  await Factory.waitForDeployment();
  console.log(`AF deployed to ${Factory.target
  
  // Deploy TestTarget contract (contract that has variable `x`)
  const TestTarget = await hre.ethers.deployContract("TestTarget");
  await TestTarget.waitForDeployment();
  console.log(`Test deployed to ${TestTarget.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
