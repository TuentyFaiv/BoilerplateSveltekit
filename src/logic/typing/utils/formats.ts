export interface FormatConfigBase {
  number: number;
  locale?: string;
}

export interface FormatConfigCurrency extends FormatConfigBase {
  currency?: string;
}