import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Problem from '@/components/home/Problem';
import Solution from '@/components/home/Solution';
import CoreBusiness from '@/components/home/CoreBusiness';
import NXMToken from '@/components/home/NXMToken';
import TokenAllocation from '@/components/home/TokenAllocation';
import KeyUseCases from '@/components/home/KeyUseCases';
import Packages from '@/components/home/Packages';
import DailyROI from '@/components/home/DailyROI';
import DirectReferral from '@/components/home/DirectReferral';
import MatchingBonus from '@/components/home/MatchingBonus';
import TopUpIncome from '@/components/home/TopUpIncome';
import RewardStructure from '@/components/home/RewardStructure';
import IncomeStreams from '@/components/home/IncomeStreams';
import TargetMarket from '@/components/home/TargetMarket';
import Security from '@/components/home/Security';
import InvestingTips from '@/components/home/InvestingTips';
import Revenue from '@/components/home/Revenue';
import Mission from '@/components/home/Mission';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <CoreBusiness />
        <NXMToken />
        <KeyUseCases />
        <TokenAllocation />
        <Packages />
        <DailyROI />
        <DirectReferral />
        <MatchingBonus />
        <TopUpIncome />
        <RewardStructure />
        <IncomeStreams />
        <TargetMarket />
        <Security />
        <InvestingTips />
        <Revenue />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
