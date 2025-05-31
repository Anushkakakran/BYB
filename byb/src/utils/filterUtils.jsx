// Utility to check if any filter is active
export const hasActiveFilter = (filters) => {
  return Object.entries(filters).some(([, value]) => value === true);
};
