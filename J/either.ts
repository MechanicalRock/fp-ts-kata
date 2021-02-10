import * as fp from "fp-ts";
import { Either, left, right } from "fp-ts/lib/Either"


const oneOrTwo = () => Math.floor(Math.random() * Math.floor(2));
const eitherConverter = () => oneOrTwo() ? left(0) : right(1); 
const anEither: Either<number, number> = eitherConverter();

console.log(anEither);

// Why would I use eithers