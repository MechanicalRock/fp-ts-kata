import * as fp from 'fp-ts';
import { bind, bindTo, of, map, chain } from 'fp-ts/IOEither';
import { pipe } from 'fp-ts/lib/function';
const event = {
  WhatIsThis: 'aMostFantasticEvent',
};

// <Either,OBJ> => OBJ

const aPipe = pipe(
  bindTo('event')(of(20)),
  bind('someVar', () => of(10)),
  bind('someOtherVar', () => of(33)),
  chain(({ event, someVar, someOtherVar }) => of([event ** 2, someVar ** 2, someOtherVar ** 2])),
  // map(({ event, someVar, someOtherVar }) => [event ** 2, someVar ** 2, someOtherVar ** 2]),
);
console.log(aPipe());
