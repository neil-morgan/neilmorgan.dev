import { describe, it, expect } from 'vitest';
import { combineClassNames } from './combine-class-names';

describe('combineClassNames', () => {
  it('joins multiple class names with spaces', () => {
    expect(combineClassNames('a', 'b', 'c')).toBe('a b c');
  });

  it('filters out falsy values (undefined, null, false, empty string)', () => {
    expect(combineClassNames('a', undefined, null, false, 'b', '', 'c')).toBe(
      'a b c'
    );
  });

  it('returns an empty string if all values are falsy', () => {
    expect(combineClassNames(undefined, null, false, '')).toBe('');
  });

  it('trims the result', () => {
    expect(combineClassNames(' a ', 'b ', ' c')).toBe('a b c');
  });

  it('handles a single class name', () => {
    expect(combineClassNames('single')).toBe('single');
  });

  it('handles no arguments', () => {
    expect(combineClassNames()).toBe('');
  });
});
