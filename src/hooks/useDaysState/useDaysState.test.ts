import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChangeEvent } from 'react';
import { useDaysState } from '@/hooks/useDaysState';

describe('useDaysState', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useDaysState());

    expect(result.current.days).toBe(undefined);
  });

  it('should handle days state changes', () => {
    const { result } = renderHook(() => useDaysState());

    act(() => {
      result.current.onChangeDays({ target: { value: '5' } } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.days).toBe(5);
  });

  it('should ignore non-numeric inputs', () => {
    const { result } = renderHook(() => useDaysState());

    act(() => {
      result.current.onChangeDays({ target: { value: 'abc' } } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.days).toBe(5);
  });
});
