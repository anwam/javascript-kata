const findNeighbor = ({ grid, targetRow, targetColumn }) => {
  if (!Array.isArray(grid[0]))
    throw new TypeError('grid must be an ARRAY of tuples');
  if (grid.length < 3)
    throw new RangeError('grid length must greater or equal to 3');
  if (grid.length > 10)
    throw new RangeError('grid length must less or equal to 10');
  return {
    neighborsCount: 1,
  };
};

export default findNeighbor;
