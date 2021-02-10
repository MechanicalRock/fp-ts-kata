import * as fp from "fp-ts";
import { bind, bindTo, of, map, chain } from 'fp-ts/IOEither';
import { pipe } from 'fp-ts/lib/function';

const event = {
    WhatIsThis: "aMostFantasticEvent"
}

const aPipe = pipe(
    bindTo("event")(of(event)),
    bind("someVar", () => of("SomeCrazyVariable")),
    bind("someOtherVar", () => of("SomeOtherCrazyVariable")),
    chain(({event, someVar, someOtherVar}) => of([event, someVar+"lilExtra", someOtherVar]))
);
console.log(aPipe())