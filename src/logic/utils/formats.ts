import type { FormatConfigBase, FormatConfigCurrency } from "@typing/utils/formats";

export function formatNumber({ number, locale = "en-US"}: FormatConfigBase) {
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(number);
}

export function formatCurrency({ number, currency = "USD", locale = "en-US"}: FormatConfigCurrency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(number);
}
