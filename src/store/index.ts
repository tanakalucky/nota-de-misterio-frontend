import { create } from 'zustand';
import { PeopleSlice, createPeopleSlice } from '@/store/peopleSlice';
import { DaysSlice, createDaysSlice } from '@/store/daysSlice';

type BoundStore = PeopleSlice & DaysSlice;

export const useBoundStore = create<BoundStore>((...a) => ({
  ...createPeopleSlice(...a),
  ...createDaysSlice(...a),
}));
