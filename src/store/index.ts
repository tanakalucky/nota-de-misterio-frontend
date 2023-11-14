import { create } from 'zustand';
import { PeopleSlice, createPeopleSlice } from '@/store/peopleSlice';
import { DaysSlice, createDaysSlice } from '@/store/daysSlice';
import { StartTimeSlice, createStartTimeSlice } from '@/store/startTimeSlice';
import { EndTimeSlice, createEndTimeSlice } from '@/store/endTimeSlice';
import { IntervalSlice, createIntervalSlice } from '@/store/intervalSlice';
import { TimesSlice, createTimesSlice } from '@/store/timesSlice';
import { PlayersSlice, createPlayersSlice } from '@/store/playersSlice';

type BoundStore = PeopleSlice & DaysSlice & StartTimeSlice & EndTimeSlice & IntervalSlice & TimesSlice & PlayersSlice;

export const useBoundStore = create<BoundStore>((...a) => ({
  ...createPeopleSlice(...a),
  ...createDaysSlice(...a),
  ...createStartTimeSlice(...a),
  ...createEndTimeSlice(...a),
  ...createIntervalSlice(...a),
  ...createTimesSlice(...a),
  ...createPlayersSlice(...a),
}));
