import { useBoundStore } from '@/store';

export const useEndTimeState = () => {
  const endTime = useBoundStore((state) => state.endTime);
  const setEndTime = useBoundStore((state) => state.setEndTime);

  const onChangeEndTime = (endHour?: string) => {
    setEndTime(endHour);
  };

  return { endTime, onChangeEndTime };
};
