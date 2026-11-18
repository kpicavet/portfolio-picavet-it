const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'YYYY-MM' -> 'Jul 2022' */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split('-').map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatPeriod(period: { from: string; to: string | null }): string {
  return `${formatMonth(period.from)} – ${period.to ? formatMonth(period.to) : 'now'}`;
}

/**
 * End of a period as fractional year. An end month counts as a whole month,
 * so 'Jun 2022' ends where 'Jul 2022' starts. null = today.
 */
export function toEndYear(ym: string | null, now = new Date()): number {
  return ym ? toYear(ym) + 1 / 12 : toYear(null, now);
}

/** Start of a month as fractional year, e.g. '2022-07' -> 2022.5 */
export function toYear(ym: string | null, now = new Date()): number {
  if (!ym) return now.getFullYear() + now.getMonth() / 12;
  const [year, month] = ym.split('-').map(Number);
  return year + (month - 1) / 12;
}
