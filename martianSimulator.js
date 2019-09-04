const moveRobots = require('./moveRobots');
const validateInput = require('./validateInput');

const matianSimulator = (grid, robots) => {
  if (validateInput(grid, robots)) {
    moveRobots(grid, robots).forEach(({lost, position}) => {
      if (lost) {
        console.log(position.join(' '), 'LOST');
      } else {
        console.log(position.join(' '));
      }
    });
  } else {
    console.log('Invalid input');
  }
};

module.exports = matianSimulator;
