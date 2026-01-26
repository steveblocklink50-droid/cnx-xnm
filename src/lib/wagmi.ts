import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, bsc } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'NEXIUM-AI',
  projectId: 'YOUR_PROJECT_ID', // Get from WalletConnect Cloud
  chains: [mainnet, polygon, optimism, arbitrum, base, bsc],
  ssr: true,
});
