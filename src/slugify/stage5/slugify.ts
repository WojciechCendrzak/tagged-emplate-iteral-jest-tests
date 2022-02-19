import { fileterOutEmpty } from '../../utils';

export const slugify = (text: string, separator: string): string =>
  text.toLowerCase().split(' ').filter(fileterOutEmpty).join(separator);
