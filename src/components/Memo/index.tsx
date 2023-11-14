import { Button, Card, Input } from '@material-tailwind/react';
import clsx from 'clsx';
import { FC } from 'react';
import { WrappedMaterialSelect } from '@/components/WrappedMaterialSelect';
import { HOURS, TIMES } from '@/config';
import {
  useDaysState,
  useEndTimeState,
  useIntervalState,
  usePeopleState,
  usePlayersState,
  useStartTimeState,
  useTimesState,
} from '@/hooks';
import { TimeTable } from '@/components/TimeTable';
import { isUndefined } from '@/utils';
import { PlayerNote } from '@/components/PlayerNote';

type MemoProps = {
  className?: string;
};

export const Memo: FC<MemoProps> = ({ className }) => {
  const { people, onChangePeople } = usePeopleState();
  const { days, onChangeDays } = useDaysState();
  const { startTime, onChangeStartTime } = useStartTimeState();
  const { endTime, onChangeEndTime } = useEndTimeState();
  const { interval, onChangeInterval } = useIntervalState();
  const { times = [], updateTimes } = useTimesState();
  const { players = [], updatePlayers } = usePlayersState();
  const handleClick = () => {
    if (
      isUndefined(people) ||
      isUndefined(days) ||
      isUndefined(startTime) ||
      isUndefined(endTime) ||
      isUndefined(interval)
    ) {
      return;
    }

    updateTimes({ days, startTime, endTime, interval });
    updatePlayers(people);
  };

  return (
    <Card color="transparent" className={clsx(className, 'flex flex-col items-center justify-center gap-3 p-6')}>
      <Input label="人数" type="number" crossOrigin="" value={people} onChange={onChangePeople} />
      <Input label="日数" type="number" crossOrigin="" value={days} onChange={onChangeDays} />
      <WrappedMaterialSelect label="開始時刻" options={HOURS} value={startTime} onChange={onChangeStartTime} />
      <WrappedMaterialSelect label="終了時刻" options={HOURS} value={endTime} onChange={onChangeEndTime} />
      <WrappedMaterialSelect
        label="時間間隔"
        options={TIMES}
        value={interval?.toString()}
        onChange={onChangeInterval}
      />
      <Button className="w-1/2" onClick={handleClick}>
        生成
      </Button>
      <TimeTable times={times} players={players} />
      <PlayerNote players={players} />
    </Card>
  );
};
