const rotate = (direction, [x, y, orientation]) => {
  const rotateLeft = direction === 'L';

  switch (orientation) {
    case 'N':
      return [x, y, rotateLeft ? 'W' : 'E'];
    case 'E':
      return [x, y, rotateLeft ? 'N' : 'S'];
    case 'S':
      return [x, y, rotateLeft ? 'E' : 'W'];
    case 'W':
      return [x, y, rotateLeft ? 'S' : 'N'];
  }
};

module.exports = rotate;
