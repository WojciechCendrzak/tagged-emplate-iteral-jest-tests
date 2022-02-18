export const getPercent = (doneCount: number, totalCount: number) =>
  totalCount ? Math.trunc((doneCount / totalCount) * 100) : undefined;
