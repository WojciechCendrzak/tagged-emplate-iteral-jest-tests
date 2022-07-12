export const getPercent = (doneCount: number, totalCount: number) => {
  if (!totalCount) return undefined;

  return Math.round((doneCount / totalCount) * 100);
};
