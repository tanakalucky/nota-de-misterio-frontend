import { StateCreator } from 'zustand';

export interface IntervalSlice {
  interval?: number;
  setInterval: (interval?: number) => void;
}

export const createIntervalSlice: StateCreator<IntervalSlice> = (set) => ({
  setInterval: (interval) => set(() => ({ interval: interval })),
});
