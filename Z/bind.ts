import { pipe } from 'fp-ts/lib/function';
import { bind, bindTo } from 'fp-ts/IOEither';

export const add = (a: number): number => {
  return a + 10;
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
