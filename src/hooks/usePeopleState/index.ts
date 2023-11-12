import { useBoundStore } from '@/store';
import { ChangeEvent } from 'react';

export const usePeopleState = () => {
  const people = useBoundStore((state) => state.people);
  const setPeople = useBoundStore((state) => state.setPeople);

  const onChangePeople = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setPeople(undefined);
      return;
    }

    if (!isNaN(Number(e.target.value))) {
      setPeople(Number(e.target.value));
    }
  };

  return { people, onChangePeople };
};
