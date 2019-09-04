const martianSimulator = require('./martianSimulator');

(function main() {
  martianSimulator(
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
        position: [0, 3, 'W'],
        instructions: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
      },
    ],
  );
})();
