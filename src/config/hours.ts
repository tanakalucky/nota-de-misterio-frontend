import { OptionType } from '@/types';

export const HOURS: OptionType[] = (() => {
  const hours: OptionType[] = [];

  for (let i = 0; i < 24; i++) {
    const hour = `${i.toString().padStart(2, '0')}:00`;
    hours.push({ value: hour, label: hour });
  }

  return hours;
})();
