import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useStartHourState } from '@/hooks/useStartHourState';

describe('useStartHourState', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useStartHourState());

    expect(result.current.startHour).toBe(undefined);
  });

  it('should handle startHour state changes', () => {
    const { result } = renderHook(() => useStartHourState());

    act(() => {
      result.current.onChangeStartHour('00:00');
    });

    expect(result.current.startHour).toBe('00:00');

    act(() => {
      result.current.onChangeStartHour(undefined);
    });

    expect(result.current.startHour).toBe(undefined);
  });
});
