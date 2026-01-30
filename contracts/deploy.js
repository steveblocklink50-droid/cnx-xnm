// Hardhat deployment script for Nexium contracts
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // 1. Deploy NexiumToken
  console.log("\n1. Deploying NexiumToken...");
  const NexiumToken = await ethers.getContractFactory("NexiumToken");
  const nexiumToken = await NexiumToken.deploy();
  await nexiumToken.deployed();
  console.log("NexiumToken deployed to:", nexiumToken.address);

  // Initialize token
  await nexiumToken.initialize();
  console.log("NexiumToken initialized");

  // 2. Deploy PackageManager
  console.log("\n2. Deploying PackageManager...");
  const PackageManager = await ethers.getContractFactory("PackageManager");
  const packageManager = await PackageManager.deploy();
  await packageManager.deployed();
  console.log("PackageManager deployed to:", packageManager.address);

  // BSC Mainnet addresses (update for testnet if needed)
  const BUSD = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const USDT = "0x55d398326f99059fF775485246999027B3197955";
  const USDC = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
  const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
  const PANCAKE_ROUTER = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

  await packageManager.initialize(BUSD, USDT, USDC, nexiumToken.address, WBNB, PANCAKE_ROUTER);
  console.log("PackageManager initialized");

  // 3. Deploy ROIManager
  console.log("\n3. Deploying ROIManager...");
  const ROIManager = await ethers.getContractFactory("ROIManager");
  const roiManager = await ROIManager.deploy();
  await roiManager.deployed();
  console.log("ROIManager deployed to:", roiManager.address);

  await roiManager.initialize(packageManager.address, nexiumToken.address);
  console.log("ROIManager initialized");

  // 4. Deploy ReferralManager
  console.log("\n4. Deploying ReferralManager...");
  const ReferralManager = await ethers.getContractFactory("ReferralManager");
  const referralManager = await ReferralManager.deploy();
  await referralManager.deployed();
  console.log("ReferralManager deployed to:", referralManager.address);

  await referralManager.initialize(nexiumToken.address);
  console.log("ReferralManager initialized");

  // 5. Deploy RewardLevels
  console.log("\n5. Deploying RewardLevels...");
  const RewardLevels = await ethers.getContractFactory("RewardLevels");
  const rewardLevels = await RewardLevels.deploy();
  await rewardLevels.deployed();
  console.log("RewardLevels deployed to:", rewardLevels.address);

  await rewardLevels.initialize(nexiumToken.address, referralManager.address);
  console.log("RewardLevels initialized");

  // 6. Deploy PoolManager
  console.log("\n6. Deploying PoolManager...");
  const PoolManager = await ethers.getContractFactory("PoolManager");
  const poolManager = await PoolManager.deploy();
  await poolManager.deployed();
  console.log("PoolManager deployed to:", poolManager.address);

  await poolManager.initialize(BUSD, USDT, USDC, nexiumToken.address);
  console.log("PoolManager initialized");

  // Save deployment addresses
  const addresses = {
    NexiumToken: nexiumToken.address,
    PackageManager: packageManager.address,
    ROIManager: roiManager.address,
    ReferralManager: referralManager.address,
    RewardLevels: rewardLevels.address,
    PoolManager: poolManager.address,
    Network: hre.network.name,
    Deployer: deployer.address,
    Timestamp: new Date().toISOString()
  };

  console.log("\n=== Deployment Summary ===");
  console.log(JSON.stringify(addresses, null, 2));

  // Save to file
  const fs = require("fs");
  fs.writeFileSync(
    "./deployment-addresses.json",
    JSON.stringify(addresses, null, 2)
  );
  console.log("\nAddresses saved to deployment-addresses.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
