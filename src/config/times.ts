import { OptionType } from '@/types';

export const TIMES: OptionType[] = (() => {
  const times: OptionType[] = [];

  times.push({ value: '5', label: '5分' });
  times.push({ value: '10', label: '10分' });
  times.push({ value: '30', label: '30分' });
  times.push({ value: '60', label: '60分' });

  return times;
})();
