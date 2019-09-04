const moveRobots = require('./');

describe('moveRobots', () => {
  it('should position the robots correctly', () => {
    expect(
      moveRobots(
        [5, 3],
        [
          {
            position: [1, 1, 'E'],
            instructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
          },
        ],
      ),
    ).toEqual([{position: [1, 1, 'E']}]);
  });
});
