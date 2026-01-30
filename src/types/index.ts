export interface UserPackage {
  packageId: number;
  amount: number;
  purchaseTime: number;
  earnings: number;
  maxEarnings: number;
  active: boolean;
  topUpCount: number;
}

export interface ReferralNode {
  referrer: string;
  leftChild: string;
  rightChild: string;
  leftSubtreeSize: number;
  rightSubtreeSize: number;
  matchingBonus: number;
  pairsMatched: number;
  exists: boolean;
}

export interface UserLevel {
  currentLevel: number;
  pairsAchieved: number;
  totalRewardsClaimed: number;
  lastLevelUpTime: number;
  levelsClaimed: boolean[];
}

export interface ROIRecord {
  user: string;
  packageIndex: number;
  lastClaimTime: number;
  totalPaidOut: number;
  active: boolean;
}

export interface ShowcaseUser {
  id: number;
  wallet: string;
  username: string;
  level: number;
  rankTitle: string;
  totalInvested: number;
  totalEarned: number;
  activeReferrals: number;
  pairsCompleted: number;
  dailyROI: number;
  joinedDate: string;
  country: string;
  avatar: string;
}

export interface Package {
  id: number;
  name: string;
  amount: number;
  dailyROI: number;
  maxReturn: number;
  description: string;
  minAmount?: number;
  unlimited?: boolean;
}

export interface RewardLevel {
  id: number;
  rank: string;
  pairs: number;
  cashReward: number;
  nxmReward: number;
  benefit: string;
}

export interface IncomeStream {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PlatformStats {
  totalUsers: number;
  totalInvested: number;
  totalPaidOut: number;
  activeUsers: number;
  totalReferrals: number;
  averageROI: number;
}

export interface UserDashboard {
  wallet: string;
  activePackages: UserPackage[];
  totalInvested: number;
  totalEarnings: number;
  pendingROI: number;
  referralBonus: number;
  matchingBonus: number;
  currentLevel: UserLevel;
  referralLink: string;
  directReferrals: number;
  binaryTree: ReferralNode;
}
