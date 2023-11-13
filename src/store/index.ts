import { create } from 'zustand';
import { PeopleSlice, createPeopleSlice } from '@/store/peopleSlice';
import { DaysSlice, createDaysSlice } from '@/store/daysSlice';
import { StartHourSlice, createStartHourSlice } from '@/store/startHourSlice';

type BoundStore = PeopleSlice & DaysSlice & StartHourSlice;

export const useBoundStore = create<BoundStore>((...a) => ({
  ...createPeopleSlice(...a),
  ...createDaysSlice(...a),
  ...createStartHourSlice(...a),
}));
