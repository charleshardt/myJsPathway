//////////////////////////////////////////////////////////////////////////
/**
 * Codewars: A Kronicle of Kata I have k-nown and pwned.
 *
 * 
 */
//////////////////////////////////////////////////////////////////////////

/**
 * 8 kyu: Calculate average
 *
 * Kata: Write a function which calculates the average of
 * the numbers in a given array. Empty arrays should
 * return 0.
 *
 * Four solutions:
 * For Loop, For-Of Loop, Reduce Method, Ternary Function
 * I just learned the reduce method while working on this.
 */

const arr = [167, 247, 290, 342, 404, 415, 460, 500, 508];

/* For Loop */
const findAvgFor = (arr) => {
  if (arr.length === 0) return `The average is 0.`;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};
console.log(findAvgFor(arr), "For Loop");

/* For-Of Loop */
const findAvgForOf = (arr) => {
  if (arr.length === 0) return `The average is 0.`;

  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum / arr.length;
};
console.log(findAvgForOf(arr), "For-Of Loop");

/* Reduce Method */
const findAvgReduce = (arr) => {
  //Initial value must be set in case of empty array
  const sum = arr.reduce((a, b) => a + b, 0);

  //If empty array, switch to 0, NaN is falsy
  const avg = sum / arr.length || 0;

  return avg;
};
console.log(findAvgReduce(arr), "Reduce Method");

/* Ternary Function/Reduce Method */
const findAvgTern = (arr) => {
  return arr.length === 0
    ? 0
    : arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
};
console.log(findAvgTern(arr), "Ternary Function");
//////////////////////////////////////////////////////////////////////////

/**
 * Is it a palindrome? 8 kyu
 *
 * Kata: Write a function which calculates the average of
 * the numbers in a given array. Empty arrays should
 * return 0.
 *
 * Four solutions:
 * For Loop, For-Of Loop, Reduce Method, Ternary Function
 * I just learned the reduce method while working on this.
 */

const checkPalindrome = function (x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
};
//////////////////////////////////////////////////////////////////////////
