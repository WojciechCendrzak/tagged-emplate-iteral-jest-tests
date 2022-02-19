import { slugify } from './slugify';

describe(`${slugify.name} with '-'`, () =>
  test.each`
    text              | expected
    ${'Home Page'}    | ${'home-page'}
    ${'Home  Page'}   | ${'home-page'}
    ${'Home  Page '}  | ${'home-page'}
    ${' Home  Page '} | ${'home-page'}
  `(`'$text' -> '$expected'`, ({ text, expected }) => {
    expect(slugify('-')(text)).toBe(expected);
  }));

describe(`${slugify.name} with '_'`, () =>
  test.each`
    text              | expected
    ${'Home Page'}    | ${'home_page'}
    ${'Home  Page'}   | ${'home_page'}
    ${'Home  Page '}  | ${'home_page'}
    ${' Home  Page '} | ${'home_page'}
  `(`'$text' -> '$expected'`, ({ text, expected }) => {
    expect(slugify('_')(text)).toBe(expected);
  }));
