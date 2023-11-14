import { StateCreator } from 'zustand';

export interface PeopleSlice {
  people?: number;
  setPeople: (people?: number) => void;
}

export const createPeopleSlice: StateCreator<PeopleSlice> = (set) => ({
  setPeople: (people) => set(() => ({ people })),
});
