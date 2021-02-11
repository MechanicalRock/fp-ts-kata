import { pipe } from 'fp-ts/lib/function';
import { IOEither, right, left, of, chain } from 'fp-ts/IOEither';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else return left(new Error('your number must be less than 10'));
};

const result = pipe(
  4,
  add,
  chain((x) => of(x + 10)),
);

console.log(result());
