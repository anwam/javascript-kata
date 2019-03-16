export const median = ({ numberArray }) => {
  numberArray.sort((a, b) => a - b);
  const length = numberArray.length;
  const halfLength = length / 2;
  const isOddNumberOfMember = length % 2 !== 0;
  const isEvenNumberOfMember = length % 2 === 0;
  const lastIndexOfFirstHalf = halfLength - 1;
  const firstIndexOfSecondHalf = halfLength;
  const middleIndex = Math.floor(halfLength);
  const lastNumberOfFirstHalf = numberArray[lastIndexOfFirstHalf];
  const firstNumberOfSecondHalf = numberArray[firstIndexOfSecondHalf];
  const averageOfTwoValue =
    (lastNumberOfFirstHalf + firstNumberOfSecondHalf) / 2;
  if (length > 1) {
    if (isOddNumberOfMember) {
      return numberArray[middleIndex];
    } else if (isEvenNumberOfMember) {
      return averageOfTwoValue;
    }
  }
  return numberArray[0];
};
