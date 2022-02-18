import { getPercent } from './get-percent';

// describe(getPercent.name, () =>
//   test.each`
//     doneCount | totalCount | expected
//     ${5}      | ${10}      | ${50}
//     ${0}      | ${0}       | ${'?'}
//   `('$doneCount of total $totalCount should give $expected %', ({ doneCount, totalCount, expected }) => {
//     expect(getPercent(doneCount, totalCount)).toBe(expected);
//   })
// );

describe(getPercent.name, () =>
  test.each`
    doneCount | totalCount | expected
    ${5}      | ${10}      | ${50}
    ${0}      | ${0}       | ${undefined}
  `('$doneCount of total $totalCount should give $expected %', ({ doneCount, totalCount, expected }) => {
    expect(getPercent(doneCount, totalCount)).toBe(expected);
  })
);
