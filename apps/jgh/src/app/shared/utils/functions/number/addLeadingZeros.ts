export function addLeadingZeros(number: number, zeros: number) {
  const numString = String(number);
  const numZeros = zeros - numString.length;
  if (numZeros <= 0) {
    return numString;
  }
  const zeroString = '0'.repeat(numZeros);
  return zeroString + numString;
}
