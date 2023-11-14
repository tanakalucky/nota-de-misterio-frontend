import { useBoundStore } from '@/store';

export const usePlayersState = () => {
  const players = useBoundStore((state) => state.players);
  const setPlayers = useBoundStore((state) => state.setPlayers);

  const updatePlayers = (people: number) => {
    const newPlayers = [];
    for (let i = 1; i <= people; i++) {
      newPlayers.push(`player${i}`);
    }

    setPlayers(newPlayers);
  };

  return { players, updatePlayers };
};
