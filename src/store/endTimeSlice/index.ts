import { StateCreator } from 'zustand';

export interface EndTimeSlice {
  endTime?: string;
  setEndTime: (endTime?: string) => void;
}

export const createEndTimeSlice: StateCreator<EndTimeSlice> = (set) => ({
  setEndTime: (endTime) => set(() => ({ endTime })),
});
