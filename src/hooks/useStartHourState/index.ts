import { useBoundStore } from '@/store';

export const useStartHourState = () => {
  const startHour = useBoundStore((state) => state.startHour);
  const setStartHour = useBoundStore((state) => state.setStartHour);

  const onChangeStartHour = (startHour?: string) => {
    setStartHour(startHour);
  };

  return { startHour, onChangeStartHour };
};
