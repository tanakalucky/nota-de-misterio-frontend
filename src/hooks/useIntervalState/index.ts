import { useBoundStore } from '@/store';

export const useIntervalState = () => {
  const interval = useBoundStore((state) => state.interval);
  const setInterval = useBoundStore((state) => state.setInterval);

  const onChangeInterval = (interval?: string) => {
    setInterval(interval);
  };

  return { interval, onChangeInterval };
};
