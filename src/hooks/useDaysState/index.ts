import { useBoundStore } from '@/store';
import { ChangeEvent } from 'react';

export const useDaysState = () => {
  const days = useBoundStore((state) => state.days);
  const setDays = useBoundStore((state) => state.setDays);

  const onChangeDays = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(Number(e.target.value))) {
      setDays(Number(e.target.value));
    }
  };

  return { days, onChangeDays };
};
