import { findNeighbor } from './index';

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

  test('grid length must greater equal to 3', () => {
    expect(() => {
      findNeighbor({
        grid: [[1]],
        targetRow: 0,
        targetColumn: 0,
      });
    }).toThrow(new RangeError('grid length must greater or equal to 3'));
  });

  test('grid length must less or equal to 10', () => {
    expect(() => {
      findNeighbor({
        grid: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11]],
        targetRow: 0,
        targetColumn: 0,
      });
    }).toThrow(new RangeError('grid length must less or equal to 10'));
  });

  test("every grid's tuples must be exactly same length", () => {
    expect(() => {
      findNeighbor({
        grid: [[1], [1, 2], [2, 3]],
        targetRow: 0,
        targetColumn: 0,
      });
    }).toThrow(new Error("each grid's tuples must have them same length"));
  });

  it('should return the neighbors count equal to 2', () => {
    const { neighborsCount } = findNeighbor({
      grid: [[1], [1], [1]],
      targetRow: 1,
      targetColumn: 0,
    });
    expect(neighborsCount).toEqual(2);
  });

  it('should return the neighbors count equal to 8', () => {
    const { neighborsCount } = findNeighbor({
      grid: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
      targetRow: 1,
      targetColumn: 1,
    });
    expect(neighborsCount).toEqual(8);
  });

  it('should return the neighbors count equal to 3', () => {
    const { neighborsCount } = findNeighbor({
      grid: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
      targetRow: 0,
      targetColumn: 2,
    });
    expect(neighborsCount).toEqual(3);
  });

  it('should return the neighbors count equal to 3', () => {
    const { neighborsCount } = findNeighbor({
      grid: [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
      targetRow: 0,
      targetColumn: 0,
    });
    expect(neighborsCount).toEqual(3);
  });

  it('should return the neighbors count equal to 3', () => {
    const { neighborsCount } = findNeighbor({
      grid: [
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
      ],
      targetRow: 1,
      targetColumn: 2,
    });
    expect(neighborsCount).toEqual(3);
  });

  it('should return the neighbors count equal to 1', () => {
    const { neighborsCount } = findNeighbor({
      grid: [
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
      ],
      targetRow: 0,
      targetColumn: 0,
    });
    expect(neighborsCount).toEqual(1);
  });
});
