import { create } from 'zustand';
import { PeopleSlice, createPeopleSlice } from '@/store/peopleSlice';

type BoundStore = PeopleSlice;

export const useBoundStore = create<BoundStore>((...a) => ({
  ...createPeopleSlice(...a),
}));
