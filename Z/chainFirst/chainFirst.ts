import { pipe } from 'fp-ts/lib/function';
import { chainFirst, fromIO, IOEither, map, right, left, fold } from 'fp-ts/IOEither';

import { of } from 'fp-ts/IO';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else return left(new Error('your number must be less than 10'));
};

const secondAdd = (result: number): number => {
  return result + 20;
};

const result = pipe(
  add(4),
  chainFirst((result) => fromIO(() => console.log(result))),
  map(secondAdd),
  fold(
    () => of(100),
    (a) => of(a + 200),
  ),
);

console.log(result());
