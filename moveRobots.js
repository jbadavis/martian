const makeMove = require('./makeMove');
const isLost = require('./isLost');

const moveRobots = (grid, robots) => {
  const scents = [];

  return robots.map(({position, instructions}) => {
    let lost = false;

    const results = instructions
      .map(instruction => {
        const newPosition = makeMove(position, instruction, scents);
        const scent = `${position[0]}${position[1]}`;

        if (lost || (isLost(grid, newPosition) && !scents.includes(scent))) {
          lost = true;

          scents.push(scent);

          return undefined;
        }

        if (isLost(grid, newPosition) && scents.includes(scent)) {
          return position;
        }

        position = newPosition;

        return newPosition;
      })
      .filter(position => position);

    return {position: results[results.length - 1], lost};
  });
};

module.exports = moveRobots;
