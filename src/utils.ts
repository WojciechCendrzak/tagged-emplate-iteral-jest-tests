export const fileterOutEmpty = <T>(item: T): item is NonNullable<T> =>
  Boolean(item);
