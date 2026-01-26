import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatAddress(address: string): string {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatDate(date: Date | number): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(typeof date === 'number' ? new Date(date) : date);
}

export function calculateROI(amount: number, percentage: number, days: number): number {
  return (amount * percentage / 100) * days;
}

export function calculateMaxReturn(amount: number, multiplier: number = 2): number {
  return amount * multiplier;
}

export function daysToMaxReturn(amount: number, dailyPercentage: number, multiplier: number = 2): number {
  const dailyROI = amount * dailyPercentage / 100;
  const maxReturn = amount * multiplier;
  return Math.ceil(maxReturn / dailyROI);
}
