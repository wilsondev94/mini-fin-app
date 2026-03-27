type Currency = "USD" | "EUR" | "GBP" | "NGN";

interface Money {
  amount: number;
  currency: Currency;
}

const LOCALE_MAP: Record<Currency, string> = {
  USD: "en-US",
  EUR: "de-DE",
  GBP: "en-GB",
  NGN: "en-NG",
};

export function formatMoney(money: Money, compact = false): string {
  return new Intl.NumberFormat(LOCALE_MAP[money.currency], {
    style: "currency",
    currency: money.currency,
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 1 : 2,
  }).format(money.amount);
}

export function formatDate(
  iso: string,
  style: "short" | "medium" | "long" = "medium",
): string {
  const date = new Date(iso);
  const options: Intl.DateTimeFormatOptions =
    style === "short"
      ? { month: "short", day: "numeric" }
      : style === "long"
        ? { weekday: "short", month: "long", day: "numeric", year: "numeric" }
        : { month: "short", day: "numeric", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatPercent(value: number, decimals = 2): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(decimals)}%`;
}

export function isPositive(value: number): boolean {
  return value > 0;
}
