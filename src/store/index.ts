import { create } from 'zustand';
import { PeopleSlice, createPeopleSlice } from '@/store/peopleSlice';
import { DaysSlice, createDaysSlice } from '@/store/daysSlice';
import { StartHourSlice, createStartHourSlice } from '@/store/startHourSlice';
import { EndHourSlice, createEndHourSlice } from '@/store/endHourSlice';
import { IntervalSlice, createIntervalSlice } from '@/store/intervalSlice';

type BoundStore = PeopleSlice & DaysSlice & StartHourSlice & EndHourSlice & IntervalSlice;

export const useBoundStore = create<BoundStore>((...a) => ({
  ...createPeopleSlice(...a),
  ...createDaysSlice(...a),
  ...createStartHourSlice(...a),
  ...createEndHourSlice(...a),
  ...createIntervalSlice(...a),
}));
