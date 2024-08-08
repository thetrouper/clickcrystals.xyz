export function parseNumber(num: number) {
  return num >= 1e9
    ? (num / 1e9).toFixed(1) + "b"
    : num >= 1e6
    ? (num / 1e6).toFixed(1) + "m"
    : num >= 1e3
    ? (num / 1e3).toFixed(1) + "k"
    : num.toString();
}
