export const getPercent = (
  doneCount: number,
  totalCount: number,
  fractionDigits: number
) => {
  if (!totalCount) return undefined;

  return ((doneCount / totalCount) * 100).toFixed(fractionDigits);
};
