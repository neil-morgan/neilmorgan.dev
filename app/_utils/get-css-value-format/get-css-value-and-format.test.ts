import { describe, it, expect } from 'vitest';
import { getCssValueAndFormat } from './get-css-value-and-format';

describe('getCssValueAndFormat', () => {
  it('parses a value with px units', () => {
    expect(getCssValueAndFormat('10px')).toEqual({ value: 10, format: 'px' });
  });

  it('parses a value with em units', () => {
    expect(getCssValueAndFormat('2.5em')).toEqual({ value: 2.5, format: 'em' });
  });

  it('parses a value with rem units', () => {
    expect(getCssValueAndFormat('1.25rem')).toEqual({
      value: 1.25,
      format: 'rem',
    });
  });

  it('throws or errors for values without a unit', () => {
    // @ts-expect-error - value without unit is not allowed by type
    expect(() => getCssValueAndFormat('42')).toThrow();
  });

  it('parses negative values', () => {
    expect(getCssValueAndFormat('-5px')).toEqual({ value: -5, format: 'px' });
  });

  it('parses values with percentage units', () => {
    expect(getCssValueAndFormat('100%')).toEqual({ value: 100, format: '%' });
  });

  it('parses values with multiple letters in unit', () => {
    expect(getCssValueAndFormat('3vw')).toEqual({ value: 3, format: 'vw' });
  });
});
