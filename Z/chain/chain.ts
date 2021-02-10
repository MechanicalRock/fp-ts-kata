import { pipe } from 'fp-ts/lib/function';
import { chainFirst, fromIO, IOEither, map, right, left, fold, chain } from 'fp-ts/IOEither';

import { of } from 'fp-ts/IO';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else return left(new Error('your number must be less than 10'));
};

const secondAdd = (result: number): IOEither<Error, number> => {
  const x: IOEither<Error, IOEither<Error, number>> = right(right(result + 20));

  return chain(x);
};

const result = pipe(
  add(4),
  chainFirst((result) => fromIO(() => console.log(result))),
  map(secondAdd),
);

console.log(result());
