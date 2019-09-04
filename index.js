const makeMove = require('./makeMove');

const moveRobots = (grid, robots) =>
  robots.map(({position, instructions}) => {
    instructions.forEach(instruction => {
      position = makeMove(position, instruction);
    });

    return { position };
  });

module.exports = moveRobots;
