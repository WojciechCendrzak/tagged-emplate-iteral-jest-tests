import { getPercent } from './get-percent';

describe(getPercent.name, () =>
  test.each`
    doneCount | totalCount | expected
    ${5}      | ${10}      | ${50}
    ${0}      | ${0}       | ${undefined}
    ${5}      | ${99}      | ${5}
    ${999}    | ${1000}    | ${99}
  `('$doneCount of total $totalCount should give $expected %', ({ doneCount, totalCount, expected }) => {
    expect(getPercent(doneCount, totalCount)).toBe(expected);
  })
);
