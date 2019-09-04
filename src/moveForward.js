const moveForward = ([x, y, orientation]) => {
  switch (orientation) {
    case 'N':
      return [x, y + 1, orientation];
    case 'E':
      return [x + 1, y, orientation];
    case 'S':
      return [x, y - 1, orientation];
    case 'W':
      return [x - 1, y, orientation];
  }
};

module.exports = moveForward;
