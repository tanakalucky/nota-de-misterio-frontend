import { Button, Card, Input } from '@material-tailwind/react';
import clsx from 'clsx';
import { FC } from 'react';
import { WrappedMaterialSelect } from '@/components/WrappedMaterialSelect';
import { HOURS, TIMES } from '@/config';
import { usePeopleState } from '@/hooks/usePeopleState';
import { useDaysState } from '@/hooks/useDaysState';

type MemoProps = {
  className?: string;
};

export const Memo: FC<MemoProps> = ({ className }) => {
  const { people, onChangePeople } = usePeopleState();
  const { days, onChangeDays } = useDaysState();

  return (
    <Card color="transparent" className={(clsx(className), 'flex flex-col items-center justify-center gap-3 p-6')}>
      <Input label="人数" type="number" crossOrigin="" value={people} onChange={onChangePeople} />
      <Input label="日数" type="number" crossOrigin="" value={days} onChange={onChangeDays} />
      <WrappedMaterialSelect label="開始時刻" options={HOURS} />
      <WrappedMaterialSelect label="終了時刻" options={HOURS} />
      <WrappedMaterialSelect label="時間間隔" options={TIMES} />
      <Button className="w-1/2">生成</Button>
    </Card>
  );
};
