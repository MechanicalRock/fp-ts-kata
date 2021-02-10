import * as fp from "fp-ts";

const number = 3;

const aPipe = fp.function.pipe(
    number,
    (x) => x*2,
    (x) => x**2,
    (x) => `The number is ${x.toString()}.`
)

console.log(aPipe);

// A pipe is a way to take a thing (the first arg pipe takes) and pass it to a series of functions
