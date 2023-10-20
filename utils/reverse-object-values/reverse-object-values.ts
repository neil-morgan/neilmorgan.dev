export const reverseObjectValues = <T>(
  obj: Record<string, T>,
): Record<string, T> => {
  const reversedObj: Record<string, T> = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0; i < keys.length; i++) {
    reversedObj[keys[i]] = values[values.length - 1 - i];
  }

  return reversedObj;
};
