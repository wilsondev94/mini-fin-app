import { describe, it, expect } from "vitest";
import { formatDate, formatMoney, formatPercent, isPositive } from "./helpers";

describe("Format money", () => {
  it("formats USD correctly", () => {
    expect(formatMoney({ amount: 1000, currency: "USD" })).toBe("$1,000.00");
  });

  it("Formats NGN correctly", () => {
    expect(formatMoney({ amount: 5000, currency: "NGN" })).toContain("5,000");
  });

  it("Formats compact notation", () => {
    expect(formatMoney({ amount: 24850, currency: "USD" }, true)).toContain(
      "24.9K",
    );
  });
});

describe("Format percent", () => {
  it("formats positive value with + sign", () => {
    expect(formatPercent(4.5)).toBe("+4.50%");
  });

  it("Formats negative value without + sign", () => {
    expect(formatPercent(-2.3)).toBe("-2.30%");
  });
});

describe("Format date", () => {
  it("formats date in medium style", () => {
    const result = formatDate("2025-01-15T00:00:00.000Z");
    expect(result).toContain("Jan");
    expect(result).toContain("15");
  });
});

describe("Is positive numbers", () => {
  it("returns true for positive numbers", () => {
    expect(isPositive(5)).toBe(true);
  });

  it("returns false for negative numbers", () => {
    expect(isPositive(-3)).toBe(false);
  });

  it("returns false for zero", () => {
    expect(isPositive(0)).toBe(false);
  });
});
