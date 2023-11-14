import { useBoundStore } from '@/store';

export const useIntervalState = () => {
  const interval = useBoundStore((state) => state.interval);
  const setInterval = useBoundStore((state) => state.setInterval);

  const onChangeInterval = (interval?: string) => {
    if (interval === '') {
      setInterval(undefined);
      return;
    }

    setInterval(Number(interval));
  };

  return { interval, onChangeInterval };
};
