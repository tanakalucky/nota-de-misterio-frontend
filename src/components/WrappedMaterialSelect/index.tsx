import { OptionType } from '@/types';
import { Option, Select } from '@material-tailwind/react';
import { FC } from 'react';

type WrappedMaterialSelectProps = {
  className?: string;
  label: string;
  options: OptionType[];
};

export const WrappedMaterialSelect: FC<WrappedMaterialSelectProps> = ({ className, label, options }) => {
  return (
    <Select className={className} label={label}>
      {options.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};
