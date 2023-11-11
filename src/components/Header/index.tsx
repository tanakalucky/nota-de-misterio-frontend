import { Typography } from '@material-tailwind/react';
import clsx from 'clsx';
import { FC } from 'react';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className={clsx(className, 'w-screen bg-black')}>
      <Typography as="a" href="#" variant="h6" className="cursor-pointer p-4 text-white">
        Nota de Misterio
      </Typography>
    </div>
  );
};
