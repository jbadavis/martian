const rotate = require('./rotate');
const moveForward = require('./moveForward');

const makeMove = (position, instruction) => {
  switch (instruction) {
    case 'L':
      return rotate(instruction, position);
    case 'R':
      return rotate(instruction, position);
    case 'F':
      return moveForward(position);
  }
};

module.exports = makeMove;
