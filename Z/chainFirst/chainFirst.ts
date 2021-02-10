import { pipe } from 'fp-ts/lib/function';
import { chainFirst, fromIO, IOEither, map, right } from 'fp-ts/IOEither';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else new Error('your number must be less than 10');
};

const secondAdd = (result: number): number => {
  return result + 20;
};

const checkItem = chainFirst((result) => fromIO(() => console.log(result)));

const result = pipe(
  add(12),
  chainFirst((result) => fromIO(() => console.log(result))),
  map(secondAdd),
);

console.log(result());
