import { pipe } from 'fp-ts/lib/function';
import { bind, bindTo, IOEither, right } from 'fp-ts/IOEither';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else throw new Error('your number must be less than 10');
};

const textDetails = (firstnumber: number, result: number): IOEither<Error, string> => {
  return `${firstnumber} + 10 equals ${result} `;
};

const result = () =>
  pipe(
    bindTo('r')(add(4)),
    bind('textDetails', (addedNumber) => textDetails(4, addedNumber.r)),
    bind('final', (finalObject) => console.log(JSON.stringify(finalObject))),
  );
