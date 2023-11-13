import { StateCreator } from 'zustand';

export interface StartHourSlice {
  startHour?: string;
  setStartHour: (startHour?: string) => void;
}

export const createStartHourSlice: StateCreator<StartHourSlice> = (set) => ({
  setStartHour: (startHour) => set(() => ({ startHour: startHour })),
});
