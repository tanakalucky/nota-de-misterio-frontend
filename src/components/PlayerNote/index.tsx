import { Typography } from '@material-tailwind/react';
import { FC } from 'react';

type PlayerNoteProps = {
  players: string[];
};

export const PlayerNote: FC<PlayerNoteProps> = ({ players }) => {
  return (
    <table className="table-auto text-left">
      <thead>
        <tr>
          {players.map((player, index) => (
            <th key={index} className="border bg-blue-gray-100 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                {player}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {players.map(() => (
            <td className="p-4 border border-blue-gray-50" contentEditable />
          ))}
        </tr>
      </tbody>
    </table>
  );
};
