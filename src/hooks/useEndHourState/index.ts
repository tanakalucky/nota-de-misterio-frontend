import { useBoundStore } from '@/store';

export const useEndHourState = () => {
  const endHour = useBoundStore((state) => state.endHour);
  const setEndHour = useBoundStore((state) => state.setEndHour);

  const onChangeEndHour = (endHour?: string) => {
    setEndHour(endHour);
  };

  return { endHour, onChangeEndHour };
};
