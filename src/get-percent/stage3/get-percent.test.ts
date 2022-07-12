import { getPercent } from './get-percent';

// describe(getPercent.name, () =>
//   test.each`
//     done | total | expected
//     ${5} | ${10} | ${50}
//     ${0} | ${0}  | ${'???'}
//   `(
//     '$done done of total $total should give $expected %',
//     ({ done, total, expected }) => {
//       expect(getPercent(done, total)).toBe(expected);
//     }
//   )
// );

describe(getPercent.name, () =>
  test.each`
    done | total | expected
    ${5} | ${10} | ${50}
    ${0} | ${0}  | ${undefined}
  `(
    '$done done of total $total should give $expected %',
    ({ done, total, expected }) => {
      expect(getPercent(done, total)).toBe(expected);
    }
  )
);
