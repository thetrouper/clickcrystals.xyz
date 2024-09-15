import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseNumber(num: number) {
  return num >= 1e9
    ? (num / 1e9).toFixed(1) + "b"
    : num >= 1e6
      ? (num / 1e6).toFixed(1) + "m"
      : num >= 1e3
        ? (num / 1e3).toFixed(1) + "k"
        : num.toString();
}
