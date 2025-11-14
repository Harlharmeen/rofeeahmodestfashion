// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function for merging Tailwind + conditional classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Optional helper: currency formatting
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount)
}

// Optional helper: truncate long text
export const truncate = (text: string, maxLength: number = 80) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
}
