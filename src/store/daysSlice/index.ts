import { StateCreator } from 'zustand';

export interface DaysSlice {
  days?: number;
  setDays: (days: number) => void;
}

export const createDaysSlice: StateCreator<DaysSlice> = (set) => ({
  setDays: (days) => set(() => ({ days: days })),
});
