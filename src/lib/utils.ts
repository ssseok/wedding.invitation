import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://weddinginvitation-mu.vercel.app/'
    : 'http://localhost:5173/';
