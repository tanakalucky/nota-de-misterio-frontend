export const isNull = (obj: unknown): obj is null => {
  return obj === null;
};

type EmptyString = '';
export const isEmptyString = (obj: unknown): obj is EmptyString => {
  return obj === '';
};

export const isUndefined = (obj: unknown): obj is undefined => {
  return obj === undefined;
};
