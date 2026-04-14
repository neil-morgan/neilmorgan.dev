import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { getCssSizeValue } from './get-css-size-value';
import type { CssSizeConfigType } from 'styles';

describe('getCssSizeValue', () => {
  const customSizes: CssSizeConfigType = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
  };

  it('returns correct rem value for custom config size aliases', () => {
    expect(getCssSizeValue('xs', customSizes)).toBe('0.75rem');
    expect(getCssSizeValue('sm', customSizes)).toBe('1rem');
    expect(getCssSizeValue('md', customSizes)).toBe('1.25rem');
    expect(getCssSizeValue('lg', customSizes)).toBe('1.5rem');
    expect(getCssSizeValue('xl', customSizes)).toBe('2rem');
  });

  it('returns default rem value for size aliases when no config is provided', () => {
    expect(getCssSizeValue('xs')).toBe('0.75rem');
    expect(getCssSizeValue('sm')).toBe('1rem');
    expect(getCssSizeValue('md')).toBe('1.25rem');
    expect(getCssSizeValue('lg')).toBe('1.5rem');
    expect(getCssSizeValue('xl')).toBe('2rem');
  });

  it('returns custom CSS value as-is', () => {
    expect(getCssSizeValue('1.5rem')).toBe('1.5rem');
    expect(getCssSizeValue('20px')).toBe('20px');
    expect(getCssSizeValue('2em')).toBe('2em');
  });

  it('throws error for invalid size values', () => {
    expect(() => getCssSizeValue('bs' as any)).toThrow(
      'Invalid size value: bs'
    );
    expect(() => getCssSizeValue('invalid' as any)).toThrow(
      'Invalid size value: invalid'
    );
    expect(() => getCssSizeValue('123' as any)).toThrow(
      'Invalid size value: 123'
    );
  });
});
