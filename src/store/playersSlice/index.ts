import { StateCreator } from 'zustand';

export interface PlayersSlice {
  players?: string[];
  setPlayers: (players?: string[]) => void;
}

export const createPlayersSlice: StateCreator<PlayersSlice> = (set) => ({
  setPlayers: (players) => set(() => ({ players: players })),
});
