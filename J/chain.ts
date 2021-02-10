import * as fp from "fp-ts";
import { chain, of } from 'fp-ts/Either';

const func2 = (a:string) => of(a+a)

const x = chain(
    func2,
    );
const aTaskEither = of("something")

console.log(func2("something"))
//same as
console.log(x(aTaskEither));

//... I don't get it. Whats the point of this??
// I guess for when you have a function that takes a type <a> and you need a function that
// takes Either<a>??