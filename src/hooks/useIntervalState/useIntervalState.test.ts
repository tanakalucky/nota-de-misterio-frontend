import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useIntervalState } from '@/hooks/useIntervalState';

describe('useIntervalState', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useIntervalState());

    expect(result.current.interval).toBe(undefined);
  });

  it('should handle interval state changes', () => {
    const { result } = renderHook(() => useIntervalState());

    act(() => {
      result.current.onChangeInterval('10');
    });

    expect(result.current.interval).toBe('10');

    act(() => {
      result.current.onChangeInterval(undefined);
    });

    expect(result.current.interval).toBe(undefined);
  });
});
