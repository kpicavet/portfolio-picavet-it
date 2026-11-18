import type { Period } from '../data/cv';

const year = (ym: string) => ym.slice(0, 4);

/** [{2016-07, null}] -> 'Since 2016'; [{2021-08,2022-06},{2025-01,null}] -> '2021–2022, since 2025' */
export function periodsLabel(periods: Period[]): string {
  return periods
    .map((p, i) => {
      if (p.to === null) return i === 0 ? `Since ${year(p.from)}` : `since ${year(p.from)}`;
      return year(p.from) === year(p.to) ? year(p.from) : `${year(p.from)}–${year(p.to)}`;
    })
    .join(', ');
}
