import findNeighbor from './index';

describe('Find neighborhood cell', () => {
  test('grid must be an ARRAY of tuples', () => {
    expect(() => {
      findNeighbor({
        grid: [1, 2, 3],
        targetRow: 0,
        targetColumn: 0,
      });
    }).toThrow(new TypeError('grid must be an ARRAY of tuples'));
  });

  it('grid length must greater equal to 3', () => {
    expect(() => {
      findNeighbor({
        grid: [[1]],
        targetRow: 0,
        targetColumn: 0,
      });
    }).toThrow(new RangeError('grid length must greater or equal to 3'));
  });

  it('grid length must less or equal to 10', () => {
    expect(() => {
      findNeighbor({
        grid: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11]],
        targetRow: 0,
        targetColumn: 0,
      });
    }).toThrow(new RangeError('grid length must less or equal to 10'));
  });
});
