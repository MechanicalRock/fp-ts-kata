import * as fp from "fp-ts";
import { Task } from "fp-ts/Task"
import { Either, left, right } from "fp-ts/Either"
import { TaskEither } from "fp-ts/TaskEither"

// A combination of an async task, and a synchro either in order to give a promise of either <A or E>
// Task<Either<E, A>> === TaskEither<E,A>


const oneOrTwo = () => Math.floor(Math.random() * Math.floor(2));
const eitherConverter = () => oneOrTwo() ? left(0) : right(1); 
const anEither: Either<number, number> = eitherConverter();
const aTaskThatHasAnEither: Task<Either<number, number>> = fp.task.of(anEither)
const aTaskEitherWoo: TaskEither<number, number> = fp.task.of(anEither);

// You could do without TaskEither, but it definitely is convenient!

