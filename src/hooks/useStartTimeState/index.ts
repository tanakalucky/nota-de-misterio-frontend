import { useBoundStore } from '@/store';

export const useStartTimeState = () => {
  const startTime = useBoundStore((state) => state.startTime);
  const setStartTime = useBoundStore((state) => state.setStartTime);

  const onChangeStartTime = (startHour?: string) => {
    setStartTime(startHour);
  };

  return { startTime, onChangeStartTime };
};
