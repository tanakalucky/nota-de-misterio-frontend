import { Typography } from '@material-tailwind/react';
import { FC } from 'react';

type TimeTableProps = {
  times: string[];
  players: string[];
};

export const TimeTable: FC<TimeTableProps> = ({ times, players }) => {
  const tableHeads = ['時間'].concat(players);

  return (
    <table className="table-auto text-left">
      <thead>
        <tr>
          {tableHeads.map((head) => (
            <th key={head} className="border bg-blue-gray-100 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                {head}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {times.map((time) => {
          const classes = 'p-4 border border-blue-gray-50';

          return (
            <tr key={time}>
              <td className={classes}>
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {time}
                </Typography>
              </td>
              {players.map(() => (
                <td className={classes} contentEditable></td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
