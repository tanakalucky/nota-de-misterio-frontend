import { useBoundStore } from '@/store';

export const useTimesState = () => {
  const times = useBoundStore((state) => state.times);
  const setTimes = useBoundStore((state) => state.setTimes);

  const updateTimes = (values: { days: number; startTime: string; endTime: string; interval: number }) => {
    const newTimes = getTimes(values);
    setTimes(newTimes);
  };

  return { times, updateTimes };
};

const getTimes = (values: { days: number; startTime: string; endTime: string; interval: number }): string[] => {
  const times = [];

  for (let day = 1; day <= values.days; day++) {
    const startHour = day === 1 ? Number(values.startTime.substring(0, 2)) : 0;
    const endHour = day === values.days ? Number(values.endTime.substring(0, 2)) : 24;

    for (let h = startHour; h < endHour; h++) {
      for (let i = 0; i < 60 / values.interval; i++) {
        const minutes = values.interval !== 60 ? values.interval * i : 0;
        const time = `${h.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        times.push(time);
      }
    }

    if (endHour !== 24) times.push(`${endHour.toString().padStart(2, '0')}:00`);
  }

  return times;
};
