import { getPercent } from './get-percent';

describe(getPercent.name, () =>
  test.each`
    done | total | fractionDigits | expected
    ${5} | ${10} | ${0}           | ${'50'}
    ${0} | ${0}  | ${0}           | ${undefined}
    ${5} | ${99} | ${0}           | ${'5'}
    ${5} | ${10} | ${2}           | ${'50.00'}
    ${3} | ${9}  | ${2}           | ${'33.33'}
  `(
    '$done done of total $total should give $expected %',
    ({ done, total, fractionDigits, expected }) => {
      expect(getPercent(done, total, fractionDigits)).toBe(expected);
    }
  )
);
