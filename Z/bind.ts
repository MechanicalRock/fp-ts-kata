import { pipe } from 'fp-ts/lib/function';
import { bind, bindTo, IOEither, right } from 'fp-ts/IOEither';

export const add = (a: number): IOEither<Error, number> => {
  if (a < 10) {
    return right(a + 10);
  } else throw new Error('your number must be less than 10');
};

const textDetails = (firstnumber: number, result: number): string => {
  return `${firstnumber} + 10 equals ${result} `;
};

const result = () =>
  pipe(
    bindTo('result')(add(4)),
    bind('textDetails', (result) => textDetails(4, result)),
    bind('final', (textDetails) => console.log(JSON.stringify(textDetails))),
  );
