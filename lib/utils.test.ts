import { cn } from './utils';

describe('cn utility function', () => {
  // Test basic class joining
  it('should join multiple string arguments into a single class string', () => {
    expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should handle a single string argument', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('should return an empty string for no arguments', () => {
    expect(cn()).toBe('');
  });

  // Test with conditional classes
  it('should include classes conditionally based on boolean values', () => {
    expect(cn('foo', { bar: true, baz: false })).toBe('foo bar');
  });

  it('should handle multiple conditional objects', () => {
    expect(cn({ foo: true, bar: false }, { baz: true, qux: true })).toBe('foo baz qux');
  });

  it('should mix string arguments with conditional objects', () => {
    expect(cn('hello', { world: true, nope: false }, 'welcome', { again: true })).toBe('hello world welcome again');
  });

  // Test handling of null and undefined arguments
  it('should ignore null and undefined arguments', () => {
    expect(cn('foo', null, 'bar', undefined, 'baz')).toBe('foo bar baz');
  });

  it('should ignore falsy values in conditional objects except for explicit false', () => {
    expect(cn({ foo: true, bar: null, baz: undefined, qux: 0, quux: '' })).toBe('foo');
  });

  // Test Tailwind CSS class merging behavior (relies on tailwind-merge)
  it('should correctly merge Tailwind CSS classes, overriding conflicting ones', () => {
    // Example: p-4 should override p-2
    expect(cn('p-2', 'p-4')).toBe('p-4');
    // Example: px-2 and py-4 should coexist
    expect(cn('px-2', 'py-4')).toBe('px-2 py-4');
    // Example: text-red-500 should override text-blue-500
    expect(cn('text-blue-500', 'text-red-500')).toBe('text-red-500');
    // Example: complex merge with conditional
    expect(cn('p-2', { 'p-4': true }, 'm-1', { 'm-3': false })).toBe('p-4 m-1');
  });

  it('should handle mixed valid and invalid inputs gracefully', () => {
    expect(cn('bg-red-500', null, 'text-white', { 'p-4': true, 'm-2': false }, undefined)).toBe('bg-red-500 text-white p-4');
  });

  it('should correctly merge conflicting classes from multiple objects', () => {
    expect(cn({ 'p-2': true, 'm-1': true }, { 'p-4': true, 'm-3': true })).toBe('p-4 m-3');
  });

  it('should preserve non-conflicting classes while merging', () => {
    expect(cn('flex items-center p-2', 'justify-center p-4')).toBe('flex items-center justify-center p-4');
  });
});
