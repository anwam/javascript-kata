import { median } from './median-kata';

describe('Find Median of Number Array', () => {
  it('should return 3', () => {
    const result = median({ numberArray: [3] });
    expect(result).toEqual(3);
  });

  it('should return 1', () => {
    const result = median({ numberArray: [1] });
    expect(result).toEqual(1);
  });

  it('should return 2', () => {
    const result = median({ numberArray: [2] });
    expect(result).toEqual(2);
  });

  it('shoud return 3', () => {
    const result = median({ numberArray: [1, 3, 4] });
    expect(result).toEqual(3);
  });

  it('should return 4', () => {
    const result = median({ numberArray: [1, 3, 4, 5, 6] });
    expect(result).toEqual(4);
  });

  it('should return 3', () => {
    const result = median({ numberArray: [3, 3, 4, 1, 6] });
    expect(result).toEqual(3);
  });
  it('should return 12.5', () => {
    const result = median({ numberArray: [3, 6, 20, 99, 10, 15] });
    expect(result).toEqual(12.5);
  });
});
