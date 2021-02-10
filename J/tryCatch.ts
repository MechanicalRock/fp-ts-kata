import { tryCatch } from "fp-ts/lib/Either";
import { Either } from 'fp-ts/Either';

// ?? Constructs a new Either from a function that might throw?

type Fruits = "Apple" | "Banana"

const oneOrTwo = () => Math.floor(Math.random() * Math.floor(2));
const randomFruit = ():Fruits => oneOrTwo() ? "Apple" : "Banana"; 

const aFunctionThatMightThrow: Either<Error, Fruits> = tryCatch(
    () => randomFruit(),
    (e) => (e as Error)
)
