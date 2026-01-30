# ENV SETUP GUIDE - Step by Step

## Quick Overview
Your `.env` file is created. Now fill in these values:

---

## STEP 1: Get Your Private Key

### Option A: From MetaMask (Recommended)
1. Open MetaMask
2. Click on your account (top right)
3. Click "Account details"
4. Click "Show private key" button
5. Enter your password
6. Copy the key (it will look like: `a1b2c3d4e5f6...`)
7. Paste into `.env` file:
```
PRIVATE_KEY=a1b2c3d4e5f6... (WITHOUT 0x)
```

### Option B: From Hardware Wallet
- Export using wallet's admin tool
- Paste into PRIVATE_KEY

⚠️ **NEVER share this key!**

---

## STEP 2: Get BscScan API Key

1. Go to: https://bscscan.com/apis
2. Click "Sign In" (create account if needed)
3. Click "+ Create API Key Token"
4. Name it: "NEXIUM Deployment"
5. Copy the key
6. Paste into `.env`:
```
BSCSCAN_API_KEY=your_key_here
```

---

## STEP 3: Get WalletConnect Project ID (Optional but Recommended)

1. Go to: https://cloud.walletconnect.com/
2. Sign up with email
3. Create new project
4. Copy "Project ID"
5. Paste into `.env`:
```
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
```

---

## STEP 4: Set Admin Wallet Address

This is the wallet that will own the contracts (can withdraw, upgrade, etc.)

In `.env`, replace with your wallet address:
```
NEXT_PUBLIC_ADMIN_WALLET=0xYourWalletAddressHere
```

You can find your address in MetaMask (top left corner)

---

## STEP 5: Verify Your Wallet Has Enough BNB

You need **5-10 BNB** for gas fees during deployment.

1. Go to: https://bscscan.com/
2. Search your wallet address
3. Check "BNB Balance" at top
4. Should show 5-10 BNB minimum

If you need BNB:
- Buy from exchange (Binance, Coinbase, etc.)
- Send to your wallet address

---

## Checklist Before Deployment

```
☐ PRIVATE_KEY filled in (without 0x)
☐ BSCSCAN_API_KEY filled in
☐ MAINNET_RPC_URL verified (should be the Binance link)
☐ Token addresses copied (already there)
☐ NEXT_PUBLIC_ADMIN_WALLET filled
☐ NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID filled (recommended)
☐ Wallet has 5-10 BNB
☐ .env file is NOT in git (check .gitignore)
```

---

## Next Steps

After filling these values:

```bash
# Compile contracts
npm run compile

# Deploy to mainnet
npx hardhat run contracts/deploy-mainnet.js --network bscMainnet

# This will output contract addresses
# Copy them to the NEXT_PUBLIC_* fields in .env

# Rebuild frontend
npm run build

# Test locally
npm run dev
```

---

## Security Reminders

✅ DO:
- Keep .env file SECURE
- Use a fresh wallet for testing if possible
- Verify addresses before deployment
- Back up your private key

❌ DON'T:
- Commit .env to git
- Share private key with anyone
- Use test wallet private keys on mainnet
- Deposit large amounts before testing thoroughly

---

## Current .env Template Location

File: `c:\Users\HP\CNX\.env`

All values ready to fill!
