import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChangeEvent } from 'react';
import { usePeopleState } from '@/hooks/usePeopleState';

describe('usePeopleState', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => usePeopleState());

    expect(result.current.people).toBe(undefined);
  });

  it('should handle people state changes', () => {
    const { result } = renderHook(() => usePeopleState());

    act(() => {
      result.current.onChangePeople({ target: { value: '5' } } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.people).toBe(5);

    act(() => {
      result.current.onChangePeople({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.people).toBe(undefined);
  });

  it('should ignore non-numeric inputs', () => {
    const { result } = renderHook(() => usePeopleState());

    act(() => {
      result.current.onChangePeople({ target: { value: 'abc' } } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.people).toBe(undefined);
  });
});
