import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with Tailwind CSS classes efficiently
 * Prevents class conflicts and duplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
