import { StateCreator } from 'zustand';

export interface TimesSlice {
  times?: string[];
  setTimes: (times?: string[]) => void;
}

export const createTimesSlice: StateCreator<TimesSlice> = (set) => ({
  setTimes: (times) => set(() => ({ times: times })),
});
