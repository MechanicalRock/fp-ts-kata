import { pipe } from 'fp-ts/lib/function';
import { bind, bindTo, chainFirst, fromIO, IOEither, right } from 'fp-ts/IOEither';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else throw new Error('your number must be less than 10');
};

const secondAdd = (result: number): number => {
  return result + 10;
};

const checkItem = chainFirst((r) =>
  fromIO(() => {
    console.log('R is: ', r);
    return r;
  }),
);

const result = pipe(add(4), checkItem, secondAdd);

console.log(result());
