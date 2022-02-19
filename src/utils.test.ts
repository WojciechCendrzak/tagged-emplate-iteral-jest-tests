import { fileterOutEmpty } from './utils';

describe(fileterOutEmpty, () =>
  test.each`
    items                         | expected
    ${[1, undefined]}             | ${[1]}
    ${[1, '']}                    | ${[1]}
    ${['home', '', , '', 'page']} | ${['home', 'page']}
  `(`'$items' -> '$expected'`, ({ items, expected }) => {
    expect(JSON.stringify(items.filter(fileterOutEmpty))).toBe(
      JSON.stringify(expected)
    );
  })
);
