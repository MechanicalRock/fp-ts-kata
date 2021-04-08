/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// inputs condition : between 0-1000 and multiples of 3 or 5
// sum of multiples
// error ??

import * as A from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";

let DataSet = Array.from(Array(1000), (_, x) => x);

const sum = pipe(
  A.array.map(DataSet, (x) => x),
  A.filter((x) => x % 3 === 0 || x % 5 === 0),
  A.reduce(0, (prev, next) => prev + next),
);

console.log(DataSet);
console.log(sum);
