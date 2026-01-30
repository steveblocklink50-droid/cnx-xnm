# QUICK ENV SETUP - Visual Guide

## 📋 What You Need to Fill

Open your `.env` file and fill these values:

---

### 1️⃣ PRIVATE_KEY (Critical)

**Where to get:**
```
MetaMask → Click Account → Account Details → Show Private Key → Copy
```

**Example (NOT real):**
```
PRIVATE_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9
```

⚠️ **IMPORTANT:**
- Do NOT include `0x` prefix
- Do NOT share with anyone
- This controls your wallet funds

---

### 2️⃣ BSCSCAN_API_KEY (For Verification)

**Where to get:**
```
1. Go to: https://bscscan.com/apis
2. Sign in (create account if needed)
3. Create new API Key
4. Copy the key
```

**Example:**
```
BSCSCAN_API_KEY=ABCD1234EFGH5678IJKL9ABC
```

---

### 3️⃣ NEXT_PUBLIC_ADMIN_WALLET (Your Wallet Address)

**Where to get:**
```
MetaMask → Top of wallet → Copy address
Looks like: 0x1234567890abcdef...
```

**Example:**
```
NEXT_PUBLIC_ADMIN_WALLET=0x1234567890abcdef1234567890abcdef12345678
```

---

### 4️⃣ NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID (For Frontend)

**Where to get:**
```
1. Go to: https://cloud.walletconnect.com/
2. Sign up
3. Create new project
4. Copy Project ID
```

**Example:**
```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=a1b2c3d4e5f6g7h8i9j0k1l2m3n4
```

---

### 5️⃣ Token Addresses (Already Filled ✅)

These are correct for BSC Mainnet:
```
BUSD_ADDRESS=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56
USDT_ADDRESS=0x55d398326f99059fF775485246999027B3197955
USDC_ADDRESS=0x8AC76a51cc950d9822D68b83FE1Ad97B32Cd580d
WBNB_ADDRESS=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
PANCAKESWAP_ROUTER=0x10ED43C718457beEF30B68e6cbC02F5d2cCBE243
```

**Do NOT change these!**

---

### 6️⃣ Contract Addresses (Will Fill After Deployment)

These will be empty until you deploy:
```
NEXT_PUBLIC_NEXIUM_TOKEN=
NEXT_PUBLIC_PACKAGE_MANAGER=
NEXT_PUBLIC_ROI_MANAGER=
NEXT_PUBLIC_REFERRAL_MANAGER=
NEXT_PUBLIC_REWARD_LEVELS=
NEXT_PUBLIC_POOL_MANAGER=
```

After running deployment script, copy the addresses here.

---

## ✅ Verification Checklist

Before deployment, verify:

```
☐ PRIVATE_KEY filled (from MetaMask)
☐ BSCSCAN_API_KEY filled (from BscScan)
☐ NEXT_PUBLIC_ADMIN_WALLET filled (your wallet)
☐ NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID filled (from WalletConnect)
☐ Wallet has 5-10 BNB for gas
☐ File saved (.env in root directory)
☐ .env is in .gitignore (NOT in git)
```

---

## 🚀 After Filling Values

```bash
# 1. Verify setup
npm run compile

# 2. Deploy to mainnet
npx hardhat run contracts/deploy-mainnet.js --network bscMainnet

# 3. Copy contract addresses from output to .env

# 4. Rebuild frontend
npm run build

# 5. Test
npm run dev
```

---

## 🔐 Security

✅ DO:
- Keep .env file secure
- Use unique deployer wallet
- Back up private key

❌ DON'T:
- Commit .env to git
- Share private key
- Use same key in multiple places

---

## 📞 Need Help?

If you get errors:

1. Check all fields are filled
2. Verify wallet has BNB (https://bscscan.com)
3. Check RPC is working: `curl https://bsc-dataseed.binance.org/`
4. Verify private key format (no 0x prefix, no spaces)

---

**Ready? Open `.env` file and start filling values!**
