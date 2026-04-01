// utils/date.util.ts
export const getCurrentDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const getFutureDate = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};
