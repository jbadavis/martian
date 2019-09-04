const isLost = (grid, position) =>
  (position[0] > grid[0] || position[0] < 0) ||
  (position[1] > grid[1] || position[1] < 0);

module.exports = isLost;
