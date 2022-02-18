import { add } from './add';

describe(add.name, () =>
  test.each`
    a    | b    | expected
    ${2} | ${2} | ${4}
  `('$a + $b -> $expected', ({ a, b, expected }) => {
    expect(add(a, b)).toBe(expected);
  })
);
