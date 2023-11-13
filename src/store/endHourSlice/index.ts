import { StateCreator } from 'zustand';

export interface EndHourSlice {
  endHour?: string;
  setEndHour: (endHour?: string) => void;
}

export const createEndHourSlice: StateCreator<EndHourSlice> = (set) => ({
  setEndHour: (endHour) => set(() => ({ endHour: endHour })),
});
