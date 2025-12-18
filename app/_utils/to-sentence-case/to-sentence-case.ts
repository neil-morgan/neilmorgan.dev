/**
 * Converts a string or array of strings into a single sentence case string.
 * For arrays: joins elements with spaces. For strings: converts directly.
 * Capitalizes only the first letter.
 *
 * @param input - String or array of strings to convert
 * @returns A sentence case string
 *
 * @example
 * toSentenceCase(['hello', 'world']) // 'Hello world'
 * toSentenceCase(['ABOUT', 'US']) // 'About us'
 * toSentenceCase('HELLO WORLD') // 'Hello world'
 * toSentenceCase('about') // 'About'
 * toSentenceCase([]) // ''
 * toSentenceCase('') // ''
 */
export const toSentenceCase = (input: string | string[]): string => {
  const str = Array.isArray(input) ? input.join(" ") : input;
  if (!str) return "";

  const lowercase = str.toLowerCase();
  return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
};
