import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useEndHourState } from '@/hooks/useEndHourState';

describe('useEndHourState', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useEndHourState());

    expect(result.current.endHour).toBe(undefined);
  });

  it('should handle endHour state changes', () => {
    const { result } = renderHook(() => useEndHourState());

    act(() => {
      result.current.onChangeEndHour('00:00');
    });

    expect(result.current.endHour).toBe('00:00');

    act(() => {
      result.current.onChangeEndHour(undefined);
    });

    expect(result.current.endHour).toBe(undefined);
  });
});
