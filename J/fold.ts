import * as fp from "fp-ts";
import { tryCatch } from "fp-ts/lib/Either";
import { Either, fold, of } from 'fp-ts/Either';
import ok from "assert";


const oneOrTwo = () => Math.floor(Math.random() * Math.floor(2));
const aFunctionThatMightThrow = (): void => ok(oneOrTwo()) 

const func1 = (): Either<Error, void> => tryCatch(
    () => aFunctionThatMightThrow(),
    (e) => (e as Error)
)

const aPipe = fp.function.pipe(
    "Need to pass a param even if not used??",
    func1,
    fold(
        () => of("Doing Error Recovery Things!"),
        () => of("There was no error!")
    )
)
console.log(aPipe)

// Fold is good for reconciling the left and the right hand side of something
// Here we change both of our possibilities into a right with different values