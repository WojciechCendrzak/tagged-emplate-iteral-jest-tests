import { slugify } from './slugify';

describe(slugify, () =>
  describe.each`
    separator
    ${'-'}
    ${'.'}
  `(`for '$separator'`, ({ separator }) => {
    describe.each`
      text                    | -              | .
      ${'Home Page'}          | ${'home-page'} | ${'home.page'}
      ${'Home  Page'}         | ${'home-page'} | ${'home.page'}
      ${'Home  Page '}        | ${'home-page'} | ${'home.page'}
      ${' Home  Page '}       | ${'home-page'} | ${'home.page'}
      ${'   Home    Page   '} | ${'home-page'} | ${'home.page'}
    `('', ({ text, ...expected }) => {
      test(`'${text}' -> '${expected[separator]}`, () => {
        expect(slugify(separator)(text)).toBe(expected[separator]);
      });
    });
  })
);

// cons
// - no such usefull after all
// - adding new separator will need to add extra column, better to copy entire test
// - to much complex
//    - hard readable(especcially getting expected form ...expected => expected[separator] look like hack)
//    - hard to understand logic
//    - hard to maintain
//    - uncecessary generalization
//    - additional empty describe just to show expected wiht separator
// prop
// - condense
// - not repeating code (text column)
// - maybe even more readable ? - all in one place
// - guaratie that texts are same for all separators

describe(slugify, () =>
  describe.each`
    separator
    ${'-'}
    ${'.'}
    ${'_'}
  `(`for '$separator'`, ({ separator }) => {
    describe.each`
      text                    | -              | .              | _
      ${'Home Page'}          | ${'home-page'} | ${'home.page'} | ${'home_page'}
      ${'Home  Page'}         | ${'home-page'} | ${'home.page'} | ${'home_page'}
      ${'Home  Page '}        | ${'home-page'} | ${'home.page'} | ${'home_page'}
      ${' Home  Page '}       | ${'home-page'} | ${'home.page'} | ${'home_page'}
      ${'   Home    Page   '} | ${'home-page'} | ${'home.page'} | ${'home_page'}
    `('', ({ text, ...expected }) => {
      test(`'${text}' -> '${expected[separator]}`, () => {
        expect(slugify(separator)(text)).toBe(expected[separator]);
      });
    });
  })
);
