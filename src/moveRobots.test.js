const moveRobots = require('./moveRobots');

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
          {
            position: [3, 2, 'N'],
            instructions: [
              'F',
              'R',
              'R',
              'F',
              'L',
              'L',
              'F',
              'F',
              'R',
              'R',
              'F',
              'L',
              'L',
            ],
          },
    {
      position: [0, 3, "W"],
      instructions: ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"]
    }
        ],
      ),
    ).toEqual([
      {position: [1, 1, 'E'], lost: false},
      {position: [3, 3, 'N'], lost: true},
      {position: [2, 3, 'S'], lost: false},
    ]);
  });
});
