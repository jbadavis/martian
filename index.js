const makeMove = require('./makeMove');
const isLost = require('./isLost');

const moveRobots = (grid, robots) =>
  robots.map(({position, instructions}) => {
    let lost = false;

    instructions.forEach(instruction => {
      position = makeMove(position, instruction);

      if (isLost(grid, position)) {
        lost = true;
      }
    });

    return {position, lost};
  });

module.exports = moveRobots;
