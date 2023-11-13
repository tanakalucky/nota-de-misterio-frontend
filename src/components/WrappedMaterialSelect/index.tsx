import { OptionType } from '@/types';
import { Option, Select, SelectProps } from '@material-tailwind/react';
import { FC } from 'react';

type WrappedMaterialSelectProps = Pick<SelectProps, 'className' | 'value' | 'onChange'> & {
  label: string;
  options: OptionType[];
};

export const WrappedMaterialSelect: FC<WrappedMaterialSelectProps> = ({
  className,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <Select className={className} label={label} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};
