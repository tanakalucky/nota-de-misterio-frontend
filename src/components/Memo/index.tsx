import { Button, Card, Input } from '@material-tailwind/react';
import clsx from 'clsx';
import { FC } from 'react';
import { WrappedMaterialSelect } from '@/components/WrappedMaterialSelect';
import { HOURS, TIMES } from '@/config';

type MemoProps = {
  className?: string;
};

export const Memo: FC<MemoProps> = ({ className }) => {
  return (
    <Card color="transparent" className={(clsx(className), 'flex flex-col items-center justify-center gap-3 p-6')}>
      <Input label="人数" crossOrigin="" />
      <Input label="日数" crossOrigin="" />
      <WrappedMaterialSelect label="開始時刻" options={HOURS} />
      <WrappedMaterialSelect label="終了時刻" options={HOURS} />
      <WrappedMaterialSelect label="時間間隔" options={TIMES} />
      <Button className="w-1/2">生成</Button>
    </Card>
  );
};
