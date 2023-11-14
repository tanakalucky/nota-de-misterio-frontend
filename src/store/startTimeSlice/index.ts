import { StateCreator } from 'zustand';

export interface StartTimeSlice {
  startTime?: string;
  setStartTime: (startTime?: string) => void;
}

export const createStartTimeSlice: StateCreator<StartTimeSlice> = (set) => ({
  setStartTime: (startTime) => set(() => ({ startTime })),
});
