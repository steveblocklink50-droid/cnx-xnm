# ENV Setup Complete ✅

## Files Created

| File | Purpose |
|------|---------|
| `.env` | Your environment variables (keep secure!) |
| `ENV_SETUP_GUIDE.md` | Detailed step-by-step instructions |
| `ENV_QUICK_REFERENCE.md` | Visual guide for each variable |
| `verify-env.sh` | Script to verify all values are set |

---

## What You Need to Do

### 1. Open `.env` file
```bash
# From VS Code:
# File → Open File → select .env
# OR press Ctrl+Shift+P → "Open: Open File"
```

### 2. Fill in 4 Required Values

**Required:**
```
PRIVATE_KEY=                          ← From MetaMask
BSCSCAN_API_KEY=                      ← From BscScan
NEXT_PUBLIC_ADMIN_WALLET=             ← Your wallet address
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID= ← From WalletConnect
```

**Already filled (Don't change):**
```
BUSD_ADDRESS=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56
USDT_ADDRESS=0x55d398326f99059fF775485246999027B3197955
USDC_ADDRESS=0x8AC76a51cc950d9822D68b83FE1Ad97B32Cd580d
WBNB_ADDRESS=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
PANCAKESWAP_ROUTER=0x10ED43C718457beEF30B68e6cbC02F5d2cCBE243
```

### 3. Save File
```
Ctrl+S (or File → Save)
```

---

## Getting Each Value

### PRIVATE_KEY
```
1. Open MetaMask
2. Click account (top right)
3. Account Details
4. Show Private Key
5. Copy (WITHOUT 0x)
6. Paste in .env
```

### BSCSCAN_API_KEY
```
1. Go to https://bscscan.com/apis
2. Sign in / create account
3. Create API Key Token
4. Copy & paste in .env
```

### NEXT_PUBLIC_ADMIN_WALLET
```
1. MetaMask (top left)
2. See your address
3. Copy it
4. Paste in .env
```

### NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID
```
1. Go to https://cloud.walletconnect.com/
2. Sign up
3. Create project
4. Copy Project ID
5. Paste in .env
```

---

## Verify Everything is Ready

```bash
# Run this to check all values are set
bash verify-env.sh

# Or manually check:
# Open .env and verify no empty fields
```

---

## Next Steps

Once `.env` is filled:

```bash
# 1. Compile contracts
npm run compile

# 2. Deploy to mainnet
npx hardhat run contracts/deploy-mainnet.js --network bscMainnet

# 3. Copy output addresses into .env NEXT_PUBLIC_* fields

# 4. Rebuild frontend
npm run build

# 5. Test locally
npm run dev
```

---

## ⚠️ Safety Reminders

```
✅ DO:
   - Keep .env secure
   - Never share PRIVATE_KEY
   - Verify wallet has BNB before deployment
   - Back up your private key

❌ DON'T:
   - Commit .env to git
   - Share values with anyone
   - Include 0x in private key
   - Deploy with test keys on mainnet
```

---

## Files Available for Reference

- **ENV_SETUP_GUIDE.md** - Detailed step-by-step with all details
- **ENV_QUICK_REFERENCE.md** - Visual guide with examples
- **verify-env.sh** - Bash script to verify setup

---

## Ready?

Once all values are in `.env` and saved, let me know and we can proceed to deployment!

Tell me when:
1. All 4 required values are filled in `.env`
2. File is saved
3. You're ready to deploy
