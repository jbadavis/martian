const moveRobots = require('./moveRobots');

const matianSimulator = (grid, robots) => {
    if (validateInput(grid, robots)) {
        moveRobots(grid, robots).forEach(({lost, position}) => {
            if (lost) {
                console.log(position.join(' '), 'LOST');
            } else {
                console.log(position.join(' '));
            }
        });
    }

    console.log('Invalid input');
};

module.exports = matianSimulator;
