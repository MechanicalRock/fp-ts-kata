import { Either, fromNullable, tryCatch } from "fp-ts/lib/Either";

import { add } from "../Pipe/Example";

const errorMessage = "input was null or undefined";
const toEither = fromNullable(errorMessage);
console.log(toEither("Test")); // { _tag: 'Right', right: 'Test' }
console.log(toEither(undefined)); //{ _tag: 'Left', left: 'input was null or undefined' }

const AddORMultiply = (n: number) => {
  if (n > 10) {
    return add(n);
  } else {
    throw new Error("number is out of range");
  }
};

const myEither = <A>(as: number): Either<Error, number> => {
  return tryCatch(
    () => AddORMultiply(as),
    (e) => (e instanceof Error ? e : new Error("unknown error")),
  );
};

console.log(myEither(20)); //{ _tag: 'Right', right: 24 }
console.log(myEither(2)); // { _tag: 'Left',left: Error: number is out of range}
