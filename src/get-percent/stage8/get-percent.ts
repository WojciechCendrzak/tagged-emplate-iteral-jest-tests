export const getPercent = (doneCount: number, totalCount: number) => {
  if (!totalCount) return undefined;

  return Math.trunc((doneCount / totalCount) * 100);
};
