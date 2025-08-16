// Utility to check if any filter is active
export const hasActiveFilter = (filters = {}, area = {},subarea={}) => {
  return Object.entries({ ...filters, ...area ,...subarea}).some(([, value]) => value === true);
};
