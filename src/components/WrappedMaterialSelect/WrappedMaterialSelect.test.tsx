import { render, screen } from '@testing-library/react';
import { WrappedMaterialSelect } from '@/components/WrappedMaterialSelect';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { setup } from '@/test/utils';
import { isNull } from '@/utils/typeguard';
import { HOURS } from '@/config';

describe('WrappedMaterialSelect', () => {
  it('renders the select with options', async () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ];

    render(<WrappedMaterialSelect label="Test Select" options={options} />);

    const selectBox = screen.getByText('Test Select').parentElement;

    expect(selectBox).toBeInTheDocument();

    const optionExpansionButton = screen.getByRole('combobox');
    if (!isNull(optionExpansionButton)) {
      const user = setup();
      await user.click(optionExpansionButton);
    }

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('applies the className prop', () => {
    const className = 'test-class';
    render(<WrappedMaterialSelect className={className} label="Test Select" options={[]} />);
    expect(screen.getByRole('combobox')).toHaveClass(className);
  });

  it('applies the value prop', () => {
    const value = '12:00';
    render(<WrappedMaterialSelect label="Test Select" options={HOURS} value={value} />);
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it('applies the onChange prop', async () => {
    const onChangeMock = vi.fn();
    render(
      <WrappedMaterialSelect
        label="Test Select"
        options={[{ value: '00:00', label: '00:00' }]}
        onChange={onChangeMock}
      />,
    );

    const optionExpansionButton = screen.getByRole('combobox');
    if (!isNull(optionExpansionButton)) {
      const user = setup();
      await user.click(optionExpansionButton);

      const option = screen.getByText('00:00');
      if (!isNull(option)) await user.click(option);

      expect(onChangeMock).toHaveBeenCalledWith('00:00');
    }
  });
});
