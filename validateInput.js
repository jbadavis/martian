const validateInput = (grid, robots) =>
    grid[0] < 50 &&
    grid[1] < 50 &&
    robots.every(({instructions}) => instructions.length < 100);

module.exports = validateInput;
