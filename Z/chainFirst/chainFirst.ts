import { pipe } from 'fp-ts/lib/function';
import { bind, bindTo, chainFirst, fromIO, IOEither, right } from 'fp-ts/IOEither';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else throw new Error('your number must be less than 10');
};

const textDetails = (firstnumber: number, result: number): IOEither<Error, string> => {
  return right(`${firstnumber} + 10 equals ${result} `);
};

const result = pipe(
  bindTo('result')(add(4)),
  bind('textDetails', (addedNumber) => textDetails(4, addedNumber.result)),
  chainFirst((finalObject) =>
    fromIO(() => {
      console.log('R is: ', JSON.stringify(finalObject));
      return finalObject;
    }),
  ),
);

result();
