/**
 * Recursive Fibonacci
 * @param {number} n - The index of fibonacci number
 * @returns {number} The nth fibonacci number.
 */
const recursiveFibonacci = n => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return memo[n] ?? (memo[n] = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2));
}
const memo = [];

/**
 * Iterative Fibonacci
 * @param {number} n - The index of fibonacci number
 * @returns {number} The nth fibonacci number
 */
const iterativeFibonacci = n => {
  while (n > sequence.length) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence[n - 1];
}
const sequence = [0, 1]