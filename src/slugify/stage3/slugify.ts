export const slugify = (text: string, separator: string): string =>
  text.toLowerCase().split(' ').join(separator);
