export const combineClassNames = (
  ...classNames: (string | undefined | null | false)[]
): string =>
  classNames
    .filter(Boolean)
    .map(name => (typeof name === 'string' ? name.trim() : name))
    .filter(Boolean)
    .join(' ')
    .trim();
