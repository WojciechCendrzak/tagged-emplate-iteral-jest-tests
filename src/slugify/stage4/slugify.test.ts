import { slugify } from './slugify';

describe(slugify, () =>
  test.each`
    text              | separator | expected
    ${'Home Page'}    | ${'-'}    | ${'home-page'}
    ${'Home  Page'}   | ${'-'}    | ${'home-page'}
    ${'Home  Page '}  | ${'-'}    | ${'home-page'}
    ${' Home  Page '} | ${'-'}    | ${'home-page'}
  `(
    `'$text' and '$separator' -> '$expected'`,
    ({ text, separator, expected }) => {
      expect(slugify(text, separator)).toBe(expected);
    }
  )
);
