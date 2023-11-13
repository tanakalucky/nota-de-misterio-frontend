import { Button, Card, Input } from '@material-tailwind/react';
import clsx from 'clsx';
import { FC } from 'react';
import { WrappedMaterialSelect } from '@/components/WrappedMaterialSelect';
import { HOURS, TIMES } from '@/config';
import { useDaysState, useEndHourState, useIntervalState, usePeopleState, useStartHourState } from '@/hooks';

type MemoProps = {
  className?: string;
};

export const Memo: FC<MemoProps> = ({ className }) => {
  const { people, onChangePeople } = usePeopleState();
  const { days, onChangeDays } = useDaysState();
  const { startHour, onChangeStartHour } = useStartHourState();
  const { endHour, onChangeEndHour } = useEndHourState();
  const { interval, onChangeInterval } = useIntervalState();

  return (
    <Card color="transparent" className={clsx(className, 'flex flex-col items-center justify-center gap-3 p-6')}>
      <Input label="人数" type="number" crossOrigin="" value={people} onChange={onChangePeople} />
      <Input label="日数" type="number" crossOrigin="" value={days} onChange={onChangeDays} />
      <WrappedMaterialSelect label="開始時刻" options={HOURS} value={startHour} onChange={onChangeStartHour} />
      <WrappedMaterialSelect label="終了時刻" options={HOURS} value={endHour} onChange={onChangeEndHour} />
      <WrappedMaterialSelect label="時間間隔" options={TIMES} value={interval} onChange={onChangeInterval} />
      <Button className="w-1/2">生成</Button>
    </Card>
  );
};
