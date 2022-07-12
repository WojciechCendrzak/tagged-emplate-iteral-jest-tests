const getPercent = jest.fn();

describe(getPercent.name, () =>
  test.each`
    done | total | expected
    ${5} | ${10} | ${50}
  `(
    '$done done of total $total should give $expected %',
    ({ done, total, expected }) => {
      expect(getPercent(done, total)).toBe(expected);
    }
  )
);
