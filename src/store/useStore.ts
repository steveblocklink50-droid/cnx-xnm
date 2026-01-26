import { create } from 'zustand';

interface User {
  address: string;
  balance: number;
  nxmBalance: number;
  stakedAmount: number;
  totalEarnings: number;
  referralCode: string;
  rank: string;
  level: number;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  updateBalance: (balance: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateBalance: (balance) =>
    set((state) => ({
      user: state.user ? { ...state.user, balance } : null,
    })),
}));

interface Package {
  id: number;
  name: string;
  amount: number;
  dailyROI: number;
  maxReturn: number;
}

interface PackageStore {
  selectedPackage: Package | null;
  setSelectedPackage: (pkg: Package | null) => void;
}

export const usePackageStore = create<PackageStore>((set) => ({
  selectedPackage: null,
  setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),
}));

interface Transaction {
  id: string;
  type: string;
  amount: number;
  timestamp: number;
  status: string;
  hash?: string;
}

interface TransactionStore {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  addTransaction: (tx) =>
    set((state) => ({ transactions: [tx, ...state.transactions] })),
}));
