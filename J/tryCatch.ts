import { tryCatch } from "fp-ts/lib/Either";
import { Either } from 'fp-ts/Either';
import ok from "assert";

// ?? Constructs a new Either from a function that might throw?

const oneOrTwo = () => Math.floor(Math.random() * Math.floor(2));
const aFunctionThatMightThrow = (): void => ok(oneOrTwo()) 

const anEither: Either<Error, void> = tryCatch(
    () => aFunctionThatMightThrow(),
    (e) => (e as Error)
)

console.log(anEither);