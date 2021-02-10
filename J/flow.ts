import * as fp from "fp-ts";

const aFlow = fp.function.flow(
    (x:number) => x*2,
    (x) => x**2,
    (x) => `The number is ${x.toString()}.`
)

console.log(aFlow(6))

// I guess that flow is exactly the same as a pipe, except you're going to pass in the first argument later