import { add } from './add';

describe(add.name, () =>
  test.each`
    a      | b    | expected
    ${2}   | ${2} | ${4}
    ${-2}  | ${2} | ${0}
    ${999} | ${1} | ${1000}
  `('$a + $b -> $expected', ({ a, b, expected }) => {
    expect(add(a, b)).toBe(expected);
  })
);
