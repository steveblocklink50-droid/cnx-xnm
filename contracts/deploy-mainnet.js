// NEXIUM MAINNET DEPLOYMENT SCRIPT
// This script deploys all contracts with UUPS proxy pattern

const hre = require("hardhat");
require("dotenv").config();

async function main() {
  console.log("\n╔════════════════════════════════════════╗");
  console.log("║   NEXIUM MAINNET DEPLOYMENT SCRIPT    ║");
  console.log("╚════════════════════════════════════════╝\n");

  const [deployer] = await ethers.getSigners();
  console.log("📍 Deployer Address:", deployer.address);

  // Check balance
  const balance = await deployer.provider.getBalance(deployer.address);
  const balanceBNB = ethers.formatEther(balance);
  console.log("💰 Balance:", balanceBNB, "BNB\n");

  if (parseFloat(balanceBNB) < 3) {
    throw new Error("❌ Insufficient BNB! Need at least 3 BNB for gas fees");
  }

  // Get token addresses from environment
  const BUSD = process.env.BUSD_ADDRESS;
  const USDT = process.env.USDT_ADDRESS;
  const USDC = process.env.USDC_ADDRESS;
  const WBNB = process.env.WBNB_ADDRESS;
  const PANCAKE_ROUTER = process.env.PANCAKESWAP_ROUTER;

  console.log("📋 Token Addresses (BSC Mainnet):");
  console.log("   BUSD:", BUSD);
  console.log("   USDT:", USDT);
  console.log("   USDC:", USDC);
  console.log("   WBNB:", WBNB);
  console.log("   PancakeRouter:", PANCAKE_ROUTER, "\n");

  // Validate token addresses
  if (!BUSD || !USDT || !USDC || !WBNB || !PANCAKE_ROUTER) {
    throw new Error("❌ Missing token addresses in .env file!");
  }

  const deploymentAddresses = {};
  let totalGasUsed = ethers.parseEther("0");

  try {
    // ============= STEP 1: Deploy NexiumToken =============
    console.log("📦 Step 1/6: Deploying NexiumToken...");
    const NexiumToken = await ethers.getContractFactory("NexiumToken");
    const nxmToken = await NexiumToken.deploy();
    const nxmDeployTx = await nxmToken.deploymentTransaction();
    const nxmReceipt = await nxmDeployTx.wait();
    const nxmAddress = await nxmToken.getAddress();
    const gasUsed1 = nxmReceipt.gasUsed * nxmReceipt.gasPrice;
    totalGasUsed += gasUsed1;

    console.log("   ✅ Deployed at:", nxmAddress);
    console.log("   ⛽ Gas used:", ethers.formatEther(gasUsed1), "BNB\n");
    deploymentAddresses.NexiumToken = nxmAddress;

    // Initialize NexiumToken
    console.log("   🔧 Initializing NexiumToken...");
    const initTx = await nxmToken.initialize();
    const initReceipt = await initTx.wait();
    const gasUsed1b = initReceipt.gasUsed * initReceipt.gasPrice;
    totalGasUsed += gasUsed1b;
    console.log("   ✅ Initialized");
    console.log("   ⛽ Gas used:", ethers.formatEther(gasUsed1b), "BNB\n");

    // ============= STEP 2: Deploy PackageManager =============
    console.log("📦 Step 2/6: Deploying PackageManager (UUPS Proxy)...");
    const PackageManager = await ethers.getContractFactory("PackageManager");
    const packageManager = await hre.upgrades.deployProxy(
      PackageManager,
      [BUSD, USDT, USDC, nxmAddress, WBNB, PANCAKE_ROUTER],
      {
        initializer: "initialize",
        kind: "uups",
        timeout: 60000,
      }
    );
    const pmDeployTx = await packageManager.deploymentTransaction();
    const pmReceipt = await pmDeployTx.wait();
    const pmAddress = await packageManager.getAddress();
    const gasUsed2 = pmReceipt.gasUsed * pmReceipt.gasPrice;
    totalGasUsed += gasUsed2;

    console.log("   ✅ Deployed at:", pmAddress);
    console.log("   ⛽ Gas used:", ethers.formatEther(gasUsed2), "BNB\n");
    deploymentAddresses.PackageManager = pmAddress;

    // ============= STEP 3: Deploy ROIManager =============
    console.log("📦 Step 3/6: Deploying ROIManager (UUPS Proxy)...");
    const ROIManager = await ethers.getContractFactory("ROIManager");
    const roiManager = await hre.upgrades.deployProxy(
      ROIManager,
      [pmAddress, nxmAddress],
      {
        initializer: "initialize",
        kind: "uups",
        timeout: 60000,
      }
    );
    const rmDeployTx = await roiManager.deploymentTransaction();
    const rmReceipt = await rmDeployTx.wait();
    const rmAddress = await roiManager.getAddress();
    const gasUsed3 = rmReceipt.gasUsed * rmReceipt.gasPrice;
    totalGasUsed += gasUsed3;

    console.log("   ✅ Deployed at:", rmAddress);
    console.log("   ⛽ Gas used:", ethers.formatEther(gasUsed3), "BNB\n");
    deploymentAddresses.ROIManager = rmAddress;

    // ============= STEP 4: Deploy ReferralManager =============
    console.log("📦 Step 4/6: Deploying ReferralManager (UUPS Proxy)...");
    const ReferralManager = await ethers.getContractFactory("ReferralManager");
    const referralManager = await hre.upgrades.deployProxy(
      ReferralManager,
      [nxmAddress],
      {
        initializer: "initialize",
        kind: "uups",
        timeout: 60000,
      }
    );
    const refDeployTx = await referralManager.deploymentTransaction();
    const refReceipt = await refDeployTx.wait();
    const refAddress = await referralManager.getAddress();
    const gasUsed4 = refReceipt.gasUsed * refReceipt.gasPrice;
    totalGasUsed += gasUsed4;

    console.log("   ✅ Deployed at:", refAddress);
    console.log("   ⛽ Gas used:", ethers.formatEther(gasUsed4), "BNB\n");
    deploymentAddresses.ReferralManager = refAddress;

    // ============= STEP 5: Deploy RewardLevels =============
    console.log("📦 Step 5/6: Deploying RewardLevels (UUPS Proxy)...");
    const RewardLevels = await ethers.getContractFactory("RewardLevels");
    const rewardLevels = await hre.upgrades.deployProxy(
      RewardLevels,
      [nxmAddress, refAddress],
      {
        initializer: "initialize",
        kind: "uups",
        timeout: 60000,
      }
    );
    const rlDeployTx = await rewardLevels.deploymentTransaction();
    const rlReceipt = await rlDeployTx.wait();
    const rlAddress = await rewardLevels.getAddress();
    const gasUsed5 = rlReceipt.gasUsed * rlReceipt.gasPrice;
    totalGasUsed += gasUsed5;

    console.log("   ✅ Deployed at:", rlAddress);
    console.log("   ⛽ Gas used:", ethers.formatEther(gasUsed5), "BNB\n");
    deploymentAddresses.RewardLevels = rlAddress;

    // ============= STEP 6: Deploy PoolManager =============
    console.log("📦 Step 6/6: Deploying PoolManager (UUPS Proxy)...");
    const PoolManager = await ethers.getContractFactory("PoolManager");
    const poolManager = await hre.upgrades.deployProxy(
      PoolManager,
      [BUSD, USDT, USDC, nxmAddress],
      {
        initializer: "initialize",
        kind: "uups",
        timeout: 60000,
      }
    );
    const poDeployTx = await poolManager.deploymentTransaction();
    const poReceipt = await poDeployTx.wait();
    const poAddress = await poolManager.getAddress();
    const gasUsed6 = poReceipt.gasUsed * poReceipt.gasPrice;
    totalGasUsed += gasUsed6;

    console.log("   ✅ Deployed at:", poAddress);
    console.log("   ⛽ Gas used:", ethers.formatEther(gasUsed6), "BNB\n");
    deploymentAddresses.PoolManager = poAddress;

    // ============= FINAL SUMMARY =============
    console.log("╔════════════════════════════════════════╗");
    console.log("║     ✅ DEPLOYMENT SUCCESSFUL!        ║");
    console.log("╚════════════════════════════════════════╝\n");

    console.log("📋 DEPLOYED CONTRACTS:\n");
    console.log("1. NexiumToken (NXM)");
    console.log("   📍", deploymentAddresses.NexiumToken);
    console.log("   🔗 https://bscscan.com/address/" + deploymentAddresses.NexiumToken);
    console.log();

    console.log("2. PackageManager");
    console.log("   📍", deploymentAddresses.PackageManager);
    console.log("   🔗 https://bscscan.com/address/" + deploymentAddresses.PackageManager);
    console.log();

    console.log("3. ROIManager");
    console.log("   📍", deploymentAddresses.ROIManager);
    console.log("   🔗 https://bscscan.com/address/" + deploymentAddresses.ROIManager);
    console.log();

    console.log("4. ReferralManager");
    console.log("   📍", deploymentAddresses.ReferralManager);
    console.log("   🔗 https://bscscan.com/address/" + deploymentAddresses.ReferralManager);
    console.log();

    console.log("5. RewardLevels");
    console.log("   📍", deploymentAddresses.RewardLevels);
    console.log("   🔗 https://bscscan.com/address/" + deploymentAddresses.RewardLevels);
    console.log();

    console.log("6. PoolManager");
    console.log("   📍", deploymentAddresses.PoolManager);
    console.log("   🔗 https://bscscan.com/address/" + deploymentAddresses.PoolManager);
    console.log();

    console.log("═══════════════════════════════════════════════════");
    console.log("⛽ TOTAL GAS USED:", ethers.formatEther(totalGasUsed), "BNB");
    console.log("💰 Remaining balance:", ethers.formatEther(balance - totalGasUsed), "BNB");
    console.log("═══════════════════════════════════════════════════\n");

    // Print environment variables for .env.local
    console.log("📝 COPY THESE TO YOUR .env.local FILE:\n");
    console.log("NEXT_PUBLIC_NEXIUM_TOKEN=" + deploymentAddresses.NexiumToken);
    console.log("NEXT_PUBLIC_PACKAGE_MANAGER=" + deploymentAddresses.PackageManager);
    console.log("NEXT_PUBLIC_ROI_MANAGER=" + deploymentAddresses.ROIManager);
    console.log("NEXT_PUBLIC_REFERRAL_MANAGER=" + deploymentAddresses.ReferralManager);
    console.log("NEXT_PUBLIC_REWARD_LEVELS=" + deploymentAddresses.RewardLevels);
    console.log("NEXT_PUBLIC_POOL_MANAGER=" + deploymentAddresses.PoolManager);
    console.log();

    // Save deployment addresses to file
    const fs = require("fs");
    const timestamp = new Date().toISOString();
    const deploymentData = {
      timestamp,
      network: hre.network.name,
      deployer: deployer.address,
      contracts: deploymentAddresses,
      gasUsed: ethers.formatEther(totalGasUsed),
    };

    fs.writeFileSync(
      "deployment-addresses.json",
      JSON.stringify(deploymentData, null, 2)
    );

    console.log("✅ Deployment details saved to deployment-addresses.json");
    console.log("📅 Timestamp:", timestamp);
    console.log("\n✨ Deployment completed successfully!");

  } catch (error) {
    console.error("\n❌ DEPLOYMENT FAILED!");
    console.error("Error:", error.message);
    
    if (error.message.includes("insufficient funds")) {
      console.error("\n💡 You need more BNB for gas fees!");
      console.error("Required: ~3-5 BNB");
      console.error("Current balance:", balanceBNB, "BNB");
    }
    
    throw error;
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
