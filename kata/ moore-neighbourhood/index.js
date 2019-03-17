export const checkArrayMembersLength = ({ array }) => {
  return array.some(tuple => tuple.length !== array[0].length);
};

export const findNeighbor = ({ grid, targetRow, targetColumn }) => {
  if (!Array.isArray(grid[0]))
    throw new TypeError('grid must be an ARRAY of tuples');
  if (grid.length < 3)
    throw new RangeError('grid length must greater or equal to 3');
  if (grid.length > 10)
    throw new RangeError('grid length must less or equal to 10');
  const isArrayMembersHaveSameLength = checkArrayMembersLength({ array: grid });
  if (isArrayMembersHaveSameLength)
    throw new Error("each grid's tuples must have them same length");

  const neighborsCount = grid.reduce((totalRow, tuple, row) => {
    return (totalRow += tuple.reduce((totalColumn, number, column) => {
      if (
        (column === targetColumn && row === targetRow) ||
        Math.abs(targetColumn - column) > 1 ||
        Math.abs(row - targetRow) > 1
      ) {
        return totalColumn;
      }
      return (totalColumn += number);
    }, 0));
  }, 0);
  return {
    neighborsCount,
  };
};
