import { fileterOutEmpty } from '../../utils';

export const slugify =
  (separator: string) =>
  (text: string): string =>
    // prettier-ignore
    text
      .toLowerCase()
      .split(' ')
      .filter(fileterOutEmpty)
      .join(separator);
