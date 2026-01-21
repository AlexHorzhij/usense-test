export const clearParams = (params: Record<string, string>) => {
  return Object.fromEntries(Object.entries(params).filter(([_, v]) => v));
};
