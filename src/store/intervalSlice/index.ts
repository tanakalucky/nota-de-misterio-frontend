import { StateCreator } from 'zustand';

export interface IntervalSlice {
  interval?: string;
  setInterval: (interval?: string) => void;
}

export const createIntervalSlice: StateCreator<IntervalSlice> = (set) => ({
  setInterval: (interval) => set(() => ({ interval: interval })),
});
