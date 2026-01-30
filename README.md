# NEXIUM-AI Platform

## Overview
NEXIUM-AI is a comprehensive DeFi platform built on Binance Smart Chain (BSC) offering multiple income streams through crypto mining, staking, trading, and a binary referral system with automatic daily ROI payments.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy smart contracts to BSC Testnet
npx hardhat run contracts/deploy.js --network bscTestnet
```

## 📋 Features

### Smart Contracts (BEP-20 on BSC)
- ✅ **NexiumToken (NXM)** - BEP-20 utility token with token allocation
- ✅ **PackageManager** - Multi-token payment support (BNB, USDT, BUSD, NXM)
- ✅ **ROIManager** - Automatic daily ROI payments (0.4%-1%)
- ✅ **ReferralManager** - Binary tree matching with 5% bonus
- ✅ **RewardLevels** - 10-level progressive rewards (Starter → Genesis)
- ✅ **PoolManager** - Platform pool for owner withdrawals
- ✅ **UUPS Upgradeable** - All contracts are upgradeable

### 💰 Income Streams
1. **Daily ROI** - 0.4% to 1% daily (auto-stops at 2x)
2. **Direct Referral** - 10% instant commission
3. **Binary Matching** - 5% on pair matches (unlimited depth)
4. **Top-up Income** - Restart cycle after 2x cap
5. **Leadership Rewards** - 10 progressive levels with cash & tokens

### 📦 Investment Packages
| Package | Amount   | Daily ROI | Daily Earnings |
|---------|----------|-----------|----------------|
| I       | $50      | 0.4%      | $0.20/day      |
| II      | $100     | 0.6%      | $0.60/day      |
| III     | $500     | 0.75%     | $3.75/day      |
| IV      | $1000+   | 1.0%      | Custom amount  |

## 🛠 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Blockchain**: Solidity 0.8.20, Hardhat, OpenZeppelin (Upgradeable)
- **Wallet**: Wagmi, RainbowKit, viem
- **Network**: Binance Smart Chain (BSC)

## 📖 Full Documentation

See full README above for:
- Installation instructions
- Smart contract deployment
- Wallet integration
- Reward levels table
- Security considerations

---

**⚠️ DISCLAIMER**: DeFi investment platform. Understand risks before participating. Returns are performance-based and not guaranteed.

A next-generation digital asset platform that allows users to earn daily income from crypto mining, staking, and trading.

## 🚀 Features

### Core DEX Features
- **Token Swapping**: Instant token exchanges with best rates
- **Liquidity Pools**: Provide liquidity and earn trading fees
- **Staking**: Lock NXM tokens and earn rewards
- **Mining**: Hardware & cloud-based mining infrastructure

### NEXIUM Ecosystem
- **Investment Packages**: $50 to $1000+ packages with daily ROI
- **Referral System**: 10% direct bonus + 5% matching bonus
- **Binary Tree Structure**: American Binary System (1:1)
- **10-Tier Reward System**: From Starter Node to Genesis Node
- **Multiple Income Streams**:
  - Daily ROI (0.4% - 1%)
  - Direct Referral Bonus (10%)
  - Matching Bonus (5%)
  - Top-up Income
  - Leadership Rewards

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Web3**: wagmi + RainbowKit
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📦 Installation

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_ALCHEMY_ID=your_alchemy_id_here
```

## 📱 Pages

- `/` - Landing page with all sections
- `/dashboard` - User dashboard
- `/swap` - Token swapping interface
- `/liquidity` - Liquidity pools
- `/staking` - NXM staking
- `/mining` - Crypto mining dashboard
- `/packages` - Investment packages
- `/referral` - Referral program & binary tree

## 🎨 Design

- **Theme**: Dark green professional theme
- **Responsive**: Mobile, Tablet, Desktop
- **Animations**: Smooth transitions and effects
- **Glass Morphism**: Modern UI with glass effects

## 🔒 Security Features

- Multi-signature wallets
- Encrypted wallet systems
- Cold & hot wallet management
- Risk-controlled fund allocation
- Internal compliance monitoring

## 📊 Income Streams

1. **Daily ROI Income**: 0.4% - 1% daily
2. **Direct Referral Bonus**: 10% instant
3. **Matching Bonus**: 5% per pair
4. **Top-up Income**: Renew and earn again
5. **Rewards & Leadership**: 10-tier progressive system

## 🏆 Reward Tiers

| Level | Pairs Required | Rank | Reward |
|-------|---------------|------|--------|
| 1 | 25 | Starter Node | $100 Cash + $50 NXM |
| 2 | 50 | Growth Node | $250 Cash + $200 NXM |
| 3 | 100 | Power Node | $500 Cash + $600 NXM |
| 4 | 250 | Elite Node | $1000 Cash + $1200 NXM |
| 5 | 500 | Pro Node | $1500 Cash + MacBook/Travel |
| 6 | 1,000 | Prime Node | $2500 Cash + Business Summit |
| 7 | 2,500 | Wealth Node | $15,000 Cash / Premium Car |
| 8 | 5,000 | Titan Node | $50,000 Cash + 0.20% ROI Boost |
| 9 | 10,000 | Legend Node | 0.5% Platform Revenue Share |
| 10 | 25,000 | Genesis Node | $100,000 Cash + Advisory Status |

## 🎯 Mission

> "Make crypto income accessible, structured, and secure for everyone"

Nexium is a structured digital economy where performance, leadership, and contribution define income.

## 📄 License

© 2026 NEXIUM-AI. All rights reserved.

## 🤝 Support

For support, email support@nexium-ai.com or join our Telegram community.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
