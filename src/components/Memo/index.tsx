import { Button, Input, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
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
    <div className={clsx(className, 'flex flex-col items-center w-[90%] md:w-[75%] lg:w-1/2')}>
      <div className="flex flex-col items-center gap-3 py-6">
        <div className="flex flex-row flex-wrap gap-3">
          <WrappedMaterialSelect
            label="開始時刻"
            options={HOURS}
            value={startTime}
            onChange={onChangeStartTime}
            containerProps={{ className: 'lg:basis-[30%]' }}
          />
          <WrappedMaterialSelect
            label="終了時刻"
            options={HOURS}
            value={endTime}
            onChange={onChangeEndTime}
            containerProps={{ className: 'lg:basis-[30%]' }}
          />
          <WrappedMaterialSelect
            label="時間間隔"
            options={TIMES}
            value={interval?.toString()}
            onChange={onChangeInterval}
            containerProps={{ className: 'lg:basis-[30%]' }}
          />
          <Input
            label="人数"
            type="number"
            crossOrigin=""
            value={people}
            onChange={onChangePeople}
            containerProps={{ className: 'lg:basis-[30%]' }}
          />
          <Input
            label="日数"
            type="number"
            crossOrigin=""
            value={days}
            onChange={onChangeDays}
            containerProps={{ className: 'lg:basis-[30%]' }}
          />
        </div>
        <Button className="w-1/2" onClick={handleClick}>
          生成
        </Button>
      </div>
      <div className="flex items-center w-full">
        {times.length !== 0 && players.length !== 0 && (
          <Tabs value="time-table" className="w-full">
            <TabsHeader>
              <Tab value="time-table">タイムテーブル</Tab>
              <Tab value="player-note">メモ</Tab>
            </TabsHeader>
            <TabsBody className="overflow-x-auto">
              <TabPanel value="time-table" className="px-0">
                <TimeTable times={times} players={players} />
              </TabPanel>
              <TabPanel value="player-note" className="px-0">
                <PlayerNote players={players} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        )}
      </div>
    </div>
  );
};
