/**
 * Currency utility functions
 * Helper functions for currency conversion and formatting
 */

import { useCurrencyStore } from './currencyStore';

/**
 * Format a price in USD to the selected currency
 * @param usdPrice - Price in USD
 * @returns Formatted price string with currency symbol
 */
export function formatCurrency(usdPrice: number): string {
  const formatPrice = useCurrencyStore.getState().formatPrice;
  return formatPrice(usdPrice);
}

/**
 * Convert USD price to selected currency
 * @param usdPrice - Price in USD
 * @returns Converted price number
 */
export function convertCurrency(usdPrice: number): number {
  const convertPrice = useCurrencyStore.getState().convertPrice;
  return convertPrice(usdPrice);
}

/**
 * Get current currency symbol
 * @returns Currency symbol string
 */
export function getCurrencySymbol(): string {
  const getCurrency = useCurrencyStore.getState().getCurrency;
  return getCurrency().symbol;
}

/**
 * Get current currency code
 * @returns Currency code string (e.g., 'USD', 'EUR')
 */
export function getCurrencyCode(): string {
  return useCurrencyStore.getState().selectedCurrency;
}

