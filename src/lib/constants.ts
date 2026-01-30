// Contract addresses - Update after deployment
export const CONTRACT_ADDRESSES = {
  NexiumToken: process.env.NEXT_PUBLIC_NEXIUM_TOKEN || "",
  PackageManager: process.env.NEXT_PUBLIC_PACKAGE_MANAGER || "",
  ROIManager: process.env.NEXT_PUBLIC_ROI_MANAGER || "",
  ReferralManager: process.env.NEXT_PUBLIC_REFERRAL_MANAGER || "",
  RewardLevels: process.env.NEXT_PUBLIC_REWARD_LEVELS || "",
  PoolManager: process.env.NEXT_PUBLIC_POOL_MANAGER || "",
};

// Package data from slides
export const PACKAGES = [
  {
    id: 0,
    name: "Package I",
    amount: 50,
    dailyROI: 0.4,
    maxReturn: 2,
    description: "Perfect for beginners to start earning daily",
  },
  {
    id: 1,
    name: "Package II",
    amount: 100,
    dailyROI: 0.6,
    maxReturn: 2,
    description: "Enhanced returns for growing investors",
  },
  {
    id: 2,
    name: "Package III",
    amount: 500,
    dailyROI: 0.75,
    maxReturn: 2,
    description: "Premium package for serious earners",
  },
  {
    id: 3,
    name: "Package IV",
    amount: 1000,
    dailyROI: 1.0,
    maxReturn: 2,
    description: "Elite package with maximum daily ROI",
    minAmount: 1000,
    unlimited: true,
  },
];

// Reward levels from slides
export const REWARD_LEVELS = [
  { id: 1, rank: "Starter Node", pairs: 25, cashReward: 100, nxmReward: 50, benefit: "$100 Cash and $50 in NXM Token" },
  { id: 2, rank: "Growth Node", pairs: 50, cashReward: 250, nxmReward: 200, benefit: "$250 Cash and $200 in NXM Token" },
  { id: 3, rank: "Power Node", pairs: 100, cashReward: 500, nxmReward: 300, benefit: "$500 Cash and $600 in NXM Token and" },
  { id: 4, rank: "Elite Node", pairs: 250, cashReward: 1000, nxmReward: 600, benefit: "$1000 Cash and $1200 in NXM Token and" },
  { id: 5, rank: "Pro Node", pairs: 500, cashReward: 1500, nxmReward: 0, benefit: "$1500 Cash and MacBook or Travel Voucher" },
  { id: 6, rank: "Prime Node", pairs: 1000, cashReward: 2500, nxmReward: 0, benefit: "$2500 Cash and International Business Summit" },
  { id: 7, rank: "Wealth Node", pairs: 2500, cashReward: 15000, nxmReward: 0, benefit: "$15,000 Cash OR Premium Car Down Payment" },
  { id: 8, rank: "Titan Node", pairs: 5000, cashReward: 50000, nxmReward: 0, benefit: "$50,000 Cash + Lifetime 0.20% ROI Boost" },
  { id: 9, rank: "Legend Node", pairs: 10000, cashReward: 0, nxmReward: 0, benefit: "0.5% Share of Monthly Platform Revenue" },
  { id: 10, rank: "Genesis Node", pairs: 25000, cashReward: 100000, nxmReward: 0, benefit: "$100,000 Cash + Advisory Status" },
];

// Income streams from slides
export const INCOME_STREAMS = [
  {
    id: 1,
    title: "Daily ROI Income",
    description: "Earn 0.4% - 1% daily on your investment until you reach 2x your package value",
    icon: "📊",
  },
  {
    id: 2,
    title: "Direct Referral Bonus",
    description: "Earn instant 10% commission when someone joins using your referral link",
    icon: "🤝",
  },
  {
    id: 3,
    title: "Matching Bonus",
    description: "Get 5% bonus on every pair match in your binary tree (unlimited depth)",
    icon: "🎯",
  },
  {
    id: 4,
    title: "Top-up Income",
    description: "After reaching 2x, top-up to start a new earning cycle with all benefits",
    icon: "🔄",
  },
  {
    id: 5,
    title: "Rewards & Leadership Benefits",
    description: "Unlock 10 progressive levels with cash, tokens, and luxury rewards",
    icon: "🏆",
  },
];

// BSC network configuration
export const BSC_NETWORK = {
  chainId: "0x38", // 56 in hex
  chainName: "BNB Smart Chain",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: ["https://bsc-dataseed.binance.org/"],
  blockExplorerUrls: ["https://bscscan.com/"],
};

export const BSC_TESTNET = {
  chainId: "0x61", // 97 in hex
  chainName: "BNB Smart Chain Testnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
  blockExplorerUrls: ["https://testnet.bscscan.com/"],
};
